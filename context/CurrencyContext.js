"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const CurrencyContext = createContext();

export const SUPPORTED_CURRENCIES = [
    "EUR", "USD", "GBP", "CHF", "AED", "AUD", "BHD", "BRL", "CAD", "CLP", "CNY", "CZK",
    "DKK", "HKD", "HUF", "IDR", "INR", "JPY", "KRW", "KWD", "MXN", "MYR", "NOK", "NZD",
    "OMR", "PHP", "PLN", "QAR", "RON", "RUB", "SEK", "SGD", "THB", "TRY", "TWD", "ZAR",
];

const BASE_CURRENCY = "USD";

export const CurrencyProvider = ({ children }) => {
    const [currency, setCurrency] = useState("USD");
    const [exchangeRate, setExchangeRate] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // Load currency from localStorage on mount
        const savedCurrency = localStorage.getItem("selectedCurrency");
        if (savedCurrency && SUPPORTED_CURRENCIES.includes(savedCurrency)) {
            setCurrency(savedCurrency);
        }
    }, []);

    useEffect(() => {
        const fetchExchangeRate = async () => {
            if (currency === BASE_CURRENCY) {
                setExchangeRate(1);
                return;
            }

            setLoading(true);
            try {
                const response = await axios.get("http://localhost:5000/api/user/currencyAPI", {
                    params: {
                        amount: 1,
                        from: BASE_CURRENCY,
                        to: currency,
                    },
                });

                // Assuming the API returns something like { result: 0.92 } or similar
                // Adjust based on actual API response structure if known.
                // If the user provided the params structure, they likely expect it to work this way.
                if (response.data && response.data.convertedAmount) {
                    setExchangeRate(response.data.convertedAmount);
                } else if (response.data && typeof response.data === 'number') {
                    setExchangeRate(response.data);
                } else {
                    // Fallback or handle based on common API patterns
                    // For now, let's assume it returns a rate.
                    setExchangeRate(response.data.rate || 1);
                }
            } catch (error) {
                console.error("Error fetching exchange rate:", error);
                // Fallback to 1 if API fails
                setExchangeRate(1);
            } finally {
                setLoading(false);
            }
        };

        fetchExchangeRate();
        localStorage.setItem("selectedCurrency", currency);
    }, [currency]);

    const convertPrice = (priceInUSD) => {
        return (priceInUSD * exchangeRate).toFixed(2);
    };

    const formatPrice = (priceInUSD) => {
        const converted = convertPrice(priceInUSD);
        return `${converted} ${currency}`;
    };

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency, exchangeRate, convertPrice, formatPrice, loading }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useCurrency must be used within a CurrencyProvider");
    }
    return context;
};
