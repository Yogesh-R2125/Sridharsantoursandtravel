import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import logo from '../../assets/logo.png';
import { useSEO } from '../../hooks/useSEO';
import './WhatsAppInquiry.css';

const popularDestinations = ['Munnar', 'Ooty', 'Wayanad', 'Kodaikanal', 'Madurai', 'Rameswaram'];
const popularPickups = ['Coimbatore', 'Cochin', 'Madurai', 'Chennai'];
const popularDrops = ['Coimbatore', 'Munnar', 'Ooty', 'Wayanad', 'Cochin', 'Madurai'];

const vehiclesList = [
  { id: 'sedan', name: 'Swift Dzire / Toyota Etios (Sedan)', capacity: '1-4 Passengers', image: '/images/sedan.png', range: [1, 4] },
  { id: 'suv', name: 'Maruti Ertiga / Toyota Innova / Crysta (SUV)', capacity: '5-7 Passengers', image: '/images/suv.png', range: [5, 7] },
  { id: 'tempo-12', name: 'Tempo Traveller (12 Seater)', capacity: '8-12 Passengers', image: '/images/tempo.png', range: [8, 12] },
  { id: 'tempo-17', name: 'Tempo Traveller (17 Seater)', capacity: '13-17 Passengers', image: '/images/tempo.png', range: [13, 17] },
  { id: 'coach', name: 'Mini Bus / Coach (18+ Seater)', capacity: '18+ Passengers', image: '/images/tempo.png', range: [18, 999] }
];

export default function WhatsAppInquiry() {
  const ref = useScrollReveal();
  const chatBodyRef = useRef(null);
  useSEO({
    title: 'Book via WhatsApp Assistant',
    description: 'Plan your trip using our automated travel assistant chatbot and generate a customized WhatsApp booking format instantly.'
  });

  const [messages, setMessages] = useState([
    { id: 'welcome', sender: 'bot', text: 'Hello! Welcome to Sri Dharsan Tours and Travels. 👋' },
    {
      id: 'q-dest',
      sender: 'bot',
      text: 'I am your booking assistant. Let me help you plan your journey. First, where are you planning to go?',
      stage: 'DESTINATION',
      options: popularDestinations
    }
  ]);

  const [stage, setStage] = useState('DESTINATION');
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const [bookingData, setBookingData] = useState({
    destination: '',
    pickup: '',
    drop: '',
    pickupDate: '',
    pickupTime: '',
    dropDate: '',
    dropTime: '',
    passengers: '',
    vehicle: '',
    accommodation: '',
    name: ''
  });

  // State for temporary inline inputs
  const [tempPickupDate, setTempPickupDate] = useState('');
  const [tempPickupTime, setTempPickupTime] = useState('');
  const [tempDropDate, setTempDropDate] = useState('');
  const [tempDropTime, setTempDropTime] = useState('');

  const handleReset = () => {
    if (window.confirm('Are you sure you want to restart the booking assistant? This will clear all your answers.')) {
      setMessages([
        { id: 'welcome', sender: 'bot', text: 'Hello! Welcome to Sri Dharsan Tours and Travels. 👋' },
        {
          id: 'q-dest',
          sender: 'bot',
          text: 'I am your booking assistant. Let me help you plan your journey. First, where are you planning to go?',
          stage: 'DESTINATION',
          options: popularDestinations
        }
      ]);
      setStage('DESTINATION');
      setInputText('');
      setIsTyping(false);
      setBookingData({
        destination: '',
        pickup: '',
        drop: '',
        pickupDate: '',
        pickupTime: '',
        dropDate: '',
        dropTime: '',
        passengers: '',
        vehicle: '',
        accommodation: '',
        name: ''
      });
      setTempPickupDate('');
      setTempPickupTime('');
      setTempDropDate('');
      setTempDropTime('');
    }
  };

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const addMessage = (sender, text, extra = {}) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender, text, ...extra }]);
  };

  const getRecommendedVehicle = (pCountStr) => {
    let pCount = 1;
    if (pCountStr.includes('-')) {
      const parts = pCountStr.split('-');
      pCount = parseInt(parts[0]) || 1;
    } else {
      pCount = parseInt(pCountStr.replace(/\+/g, '')) || 1;
    }
    return vehiclesList.find(v => pCount >= v.range[0] && pCount <= v.range[1]) || vehiclesList[0];
  };

  const handleSendMessage = (textToSend = '') => {
    const text = textToSend.trim() || inputText.trim();
    if (!text) return;

    // Clear input box
    setInputText('');

    // Add user message bubble
    addMessage('user', text);

    // Proceed to next stage with bot typing effect
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      processNextStage(text);
    }, 1000);
  };

  const processNextStage = (userAnswer) => {
    switch (stage) {
      case 'DESTINATION':
        setBookingData(prev => ({ ...prev, destination: userAnswer }));
        setStage('PICKUP');
        addMessage('bot', `Great! Destination is set to: "${userAnswer}".\n\nWhat is your Pick Up Location?`, {
          stage: 'PICKUP',
          options: popularPickups
        });
        break;

      case 'PICKUP':
        setBookingData(prev => ({ ...prev, pickup: userAnswer }));
        setStage('DROP');
        addMessage('bot', `Got it! Pick Up Location: "${userAnswer}".\n\nWhere should we drop you?`, {
          stage: 'DROP',
          options: popularDrops
        });
        break;

      case 'DROP':
        setBookingData(prev => ({ ...prev, drop: userAnswer }));
        setStage('PICKUP_DATETIME');
        addMessage('bot', 'Drop Location saved.\n\nNow, please select your Pick Up Date & Time:', {
          stage: 'PICKUP_DATETIME',
          isCustomInput: true
        });
        break;

      case 'PICKUP_DATETIME':
        // The userAnswer represents formatted date/time string from custom bubble
        setBookingData(prev => ({ ...prev, pickupDate: tempPickupDate, pickupTime: tempPickupTime }));
        setStage('DROP_DATETIME');
        addMessage('bot', `Pickup Departure confirmed for: ${userAnswer}.\n\nNext, please select your Drop Date & Time:`, {
          stage: 'DROP_DATETIME',
          isCustomInput: true
        });
        break;

      case 'DROP_DATETIME':
        setBookingData(prev => ({ ...prev, dropDate: tempDropDate, dropTime: tempDropTime }));
        setStage('PASSENGERS');
        addMessage('bot', `Drop Return confirmed for: ${userAnswer}.\n\nHow many passengers are traveling?`, {
          stage: 'PASSENGERS',
          options: ['1-4', '5-7', '8-12', '13-17', '18+']
        });
        break;

      case 'PASSENGERS': {
        const recommended = getRecommendedVehicle(userAnswer);
        setBookingData(prev => ({ ...prev, passengers: userAnswer, vehicle: recommended.name }));
        setStage('VEHICLE');
        addMessage('bot', `With a group size of ${userAnswer} passengers, we recommend our:`, {
          stage: 'VEHICLE',
          vehicleRecommendation: recommended,
          options: ['Yes, select this vehicle', 'No, show all vehicles']
        });
        break;
      }

      case 'VEHICLE_SELECT_MANUAL':
        setBookingData(prev => ({ ...prev, vehicle: userAnswer }));
        setStage('ACCOMMODATION');
        addMessage('bot', `Vehicle updated to: ${userAnswer}.\n\nDo you need hotel accommodation?`, {
          stage: 'ACCOMMODATION',
          options: ['Yes, please recommend hotels', 'No, I have my own booking']
        });
        break;

      case 'VEHICLE':
        if (userAnswer === 'Yes, select this vehicle') {
          setStage('ACCOMMODATION');
          addMessage('bot', `Perfect! Dynamic vehicle confirmed: ${bookingData.vehicle}.\n\nDo you need hotel accommodation?`, {
            stage: 'ACCOMMODATION',
            options: ['Yes, please recommend hotels', 'No, I have my own booking']
          });
        } else {
          setStage('VEHICLE_SELECT_MANUAL');
          addMessage('bot', 'No problem. Please choose your preferred vehicle from the list:', {
            stage: 'VEHICLE_SELECT_MANUAL',
            isVehicleSelector: true
          });
        }
        break;

      case 'ACCOMMODATION':
        setBookingData(prev => ({ ...prev, accommodation: userAnswer }));
        setStage('NAME');
        addMessage('bot', `Accommodation details registered: "${userAnswer}".\n\nLastly, what is your Name?`, {
          stage: 'NAME'
        });
        break;

      case 'NAME': {
        const updatedData = { ...bookingData, name: userAnswer };
        setBookingData(updatedData);
        setStage('SUMMARY');
        addMessage('bot', `Thank you, ${userAnswer}! I have compiled your inquiry summary:`, {
          stage: 'SUMMARY',
          isSummaryCard: true,
          summaryData: updatedData
        });
        break;
      }

      default:
        break;
    }
  };

  const handleDateTimeConfirm = (type) => {
    if (type === 'pickup') {
      if (!tempPickupDate || !tempPickupTime) {
        alert('Please select both date and time.');
        return;
      }
      const formatted = `${tempPickupDate} at ${tempPickupTime}`;
      handleSendMessage(formatted);
    } else {
      if (!tempDropDate || !tempDropTime) {
        alert('Please select both date and time.');
        return;
      }
      const formatted = `${tempDropDate} at ${tempDropTime}`;
      handleSendMessage(formatted);
    }
  };

  const handleManualVehicleSelect = (vName) => {
    handleSendMessage(vName);
  };

  const handleWhatsAppRedirect = () => {
    const messageText = `*Sri Dharsan Tours and Travels - WhatsApp Booking/Inquiry*

*1. Destination:* ${bookingData.destination}
*2. Pickup Location:* ${bookingData.pickup}
*3. Drop Location:* ${bookingData.drop}
*4. Pickup Date/Time:* ${bookingData.pickupDate} at ${bookingData.pickupTime}
*5. Drop Date/Time:* ${bookingData.dropDate} at ${bookingData.dropTime}
*6. Passenger Count:* ${bookingData.passengers}
*7. Selected Vehicle:* ${bookingData.vehicle}
*8. Accommodation Needed?:* ${bookingData.accommodation}
*9. Name:* ${bookingData.name}

_Submitted via WhatsApp Chatbot._`;

    const encodedMsg = encodeURIComponent(messageText);
    window.open(`https://wa.me/918973488089?text=${encodedMsg}`, '_blank');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div ref={ref} className="chat-page-wrapper">
      <section className="page-hero" id="chat-hero">
        <div className="container">
          <p className="breadcrumb"><Link to="/">Home</Link> / WhatsApp Chatbot</p>
          <h1>Book via WhatsApp Assistant</h1>
          <p>Talk with our automated travel assistant to customize and generate your WhatsApp booking format instantly.</p>
        </div>
      </section>

      <section className="section" id="chatbot-section">
        <div className="container">
          <div className="whatsapp-chat-window">
            
            {/* WhatsApp Header */}
            <div className="chat-header">
              <div className="chat-header-left">
                <img src={logo} alt="Sri Dharsan Tours and Travels Logo" className="chat-avatar-img" />
                <div className="chat-user-info">
                  <h3>Sri Dharsan Tours and Travels</h3>
                  <span className="online-indicator">
                    <span className="dot"></span> Online Assistant
                  </span>
                </div>
              </div>
              <div className="chat-header-right">
                <button
                  type="button"
                  className="chat-refresh-btn"
                  onClick={handleReset}
                  title="Restart Chat"
                  aria-label="Restart Chat"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                  </svg>
                </button>
                <div className="chat-menu-dots">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                </div>
              </div>
            </div>

            {/* Chat Body Area */}
            <div ref={chatBodyRef} className="chat-body-container">
              <div className="chat-messages-list">
                {messages.map((msg, index) => (
                  <div key={index} className={`chat-message-bubble-wrapper ${msg.sender}`}>
                    
                    {/* Bot avatar (only for bot messages) */}
                    {msg.sender === 'bot' && <img src={logo} alt="Logo" className="chat-bubble-avatar-img" />}
                    
                    <div className="chat-bubble">
                      <div className="bubble-text">{msg.text}</div>

                      {/* Dynamic Custom Elements embedded in chat bubble */}
                      
                      {/* DateTime Picker Bubble */}
                      {msg.isCustomInput && msg.stage === 'PICKUP_DATETIME' && stage === 'PICKUP_DATETIME' && (
                        <div className="inline-picker-bubble">
                          <input
                            type="date"
                            value={tempPickupDate}
                            onChange={(e) => setTempPickupDate(e.target.value)}
                            required
                          />
                          <input
                            type="time"
                            value={tempPickupTime}
                            onChange={(e) => setTempPickupTime(e.target.value)}
                            required
                          />
                          <button type="button" className="inline-confirm-btn" onClick={() => handleDateTimeConfirm('pickup')}>
                            Confirm Departure Time
                          </button>
                        </div>
                      )}

                      {msg.isCustomInput && msg.stage === 'DROP_DATETIME' && stage === 'DROP_DATETIME' && (
                        <div className="inline-picker-bubble">
                          <input
                            type="date"
                            value={tempDropDate}
                            onChange={(e) => setTempDropDate(e.target.value)}
                            required
                          />
                          <input
                            type="time"
                            value={tempDropTime}
                            onChange={(e) => setTempDropTime(e.target.value)}
                            required
                          />
                          <button type="button" className="inline-confirm-btn" onClick={() => handleDateTimeConfirm('drop')}>
                            Confirm Return Time
                          </button>
                        </div>
                      )}

                      {/* Recommended Vehicle Card Bubble */}
                      {msg.vehicleRecommendation && (
                        <div className="inline-vehicle-card">
                          <img src={msg.vehicleRecommendation.image} alt={msg.vehicleRecommendation.name} />
                          <div className="vehicle-card-info">
                            <h4>{msg.vehicleRecommendation.name}</h4>
                            <span className="cap">{msg.vehicleRecommendation.capacity}</span>
                          </div>
                        </div>
                      )}

                      {/* Manual Vehicle Selector Bubble */}
                      {msg.isVehicleSelector && stage === 'VEHICLE_SELECT_MANUAL' && (
                        <div className="inline-vehicles-list">
                          {vehiclesList.map(v => (
                            <div key={v.id} className="inline-vehicle-item" onClick={() => handleManualVehicleSelect(v.name)}>
                              <img src={v.image} alt={v.name} />
                              <div>
                                <h5>{v.name}</h5>
                                <span>{v.capacity}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Summary Card Bubble */}
                      {msg.isSummaryCard && (
                        <div className="inline-summary-card">
                          <div className="summary-row"><span>Destination:</span><strong>{msg.summaryData.destination}</strong></div>
                          <div className="summary-row"><span>Pickup:</span><strong>{msg.summaryData.pickup}</strong></div>
                          <div className="summary-row"><span>Drop:</span><strong>{msg.summaryData.drop}</strong></div>
                          <div className="summary-row"><span>Date/Time:</span><strong>{msg.summaryData.pickupDate} at {msg.summaryData.pickupTime}</strong></div>
                          <div className="summary-row"><span>Passengers:</span><strong>{msg.summaryData.passengers}</strong></div>
                          <div className="summary-row"><span>Vehicle:</span><strong>{msg.summaryData.vehicle}</strong></div>
                          <div className="summary-row"><span>Hotel Accommodation:</span><strong>{msg.summaryData.accommodation}</strong></div>
                          <button type="button" className="summary-whatsapp-btn" onClick={handleWhatsAppRedirect}>
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                            Confirm & Send on WhatsApp
                          </button>
                        </div>
                      )}

                      <span className="bubble-timestamp">
                        {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator Bubble */}
                {isTyping && (
                  <div className="chat-message-bubble-wrapper bot">
                    <img src={logo} alt="Logo" className="chat-bubble-avatar-img" />
                    <div className="chat-bubble typing-bubble">
                      <div className="typing-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Replies / Options list */}
            {stage !== 'SUMMARY' && !isTyping && messages[messages.length - 1]?.options && (
              <div className="chat-options-replies">
                {messages[messages.length - 1].options.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className="reply-chip"
                    onClick={() => handleSendMessage(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Input Bar */}
            <div className="chat-input-bar">
              <div className="chat-input-actions">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" /></svg>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
              </div>
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={
                  stage === 'PICKUP_DATETIME' || stage === 'DROP_DATETIME'
                    ? 'Use the selectors in the chat above...'
                    : stage === 'VEHICLE_SELECT_MANUAL'
                    ? 'Choose vehicle from the list above...'
                    : 'Type a message...'
                }
                disabled={
                  stage === 'PICKUP_DATETIME' ||
                  stage === 'DROP_DATETIME' ||
                  stage === 'VEHICLE_SELECT_MANUAL' ||
                  stage === 'SUMMARY'
                }
                id="chatbot-input"
              />
              <button
                type="button"
                className="chat-send-btn"
                onClick={() => handleSendMessage()}
                disabled={!inputText.trim()}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
