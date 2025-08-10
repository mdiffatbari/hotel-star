import React, { useEffect, useState } from 'react';
import offer from '../../assets/offer.jpg'

const PromotionPopup = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {

        const hasSeen = localStorage.getItem('promoSeen');
        if (!hasSeen) {
            setVisible(true);
            localStorage.setItem('promoSeen', 'true');
        }
    }, []);

    if (!visible) return null;

    return (
        <div
            style={{
                position: 'fixed',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999,
            }}
        >
            <div
                style={{
                    position: 'relative',
                    background: '#fff',
                    padding: 0,
                    borderRadius: 8,
                    maxWidth: '90vw',
                    maxHeight: '90vh',
                    boxShadow: '0 0 15px rgba(0,0,0,0.3)',
                }}
            >
                <button
                    onClick={() => setVisible(false)}
                    style={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        backgroundColor: '#dc2626', // red-600
                        color: '#fff',
                        border: 'none',
                        borderRadius: '50%',
                        width: 32,
                        height: 32,
                        fontSize: 20,
                        cursor: 'pointer',
                        lineHeight: '32px',
                        textAlign: 'center',
                        transition: 'background-color 0.2s',
                    }}
                    aria-label="Close popup"
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#b91c1c')} // red-700
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#dc2626')} // red-600
                >
                    ×
                </button>

                <img
                    className='w-[500px]'
                    src={offer}
                    alt="Special Promotion"
                    style={{ display: 'block', maxWidth: '100%', borderRadius: 8 }}
                />
            </div>
        </div>
    );
};

export default PromotionPopup;
