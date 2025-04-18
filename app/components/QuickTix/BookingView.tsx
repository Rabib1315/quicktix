import React from 'react';
import { Users, Share } from 'lucide-react';
import { BookingViewProps } from './types';

export const BookingView: React.FC<BookingViewProps> = ({ movie }) => {
  return (
    <div className="pb-20">
      <div className="p-4 bg-white border-b">
        <h1 className="text-xl font-bold">{movie.title}</h1>
        <p className="text-gray-500">AMC Downtown 12 • Today at 7:30 PM</p>
      </div>
      
      <div className="p-4">
        <h2 className="font-bold text-lg mb-3">Select Seats</h2>
        
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="w-full h-6 bg-gray-300 rounded mb-8 flex items-center justify-center">
            <span className="text-xs text-gray-500">SCREEN</span>
          </div>
          
          <div className="grid grid-cols-8 gap-2 mb-6">
            {Array(32).fill(null).map((_, i) => (
              <div 
                key={i} 
                className={`
                  h-6 rounded-t-md
                  ${i % 8 === 3 || i % 8 === 4 ? 'mx-4' : ''}
                  ${[3, 7, 12, 19, 28].includes(i) ? 'bg-teal-500' : 'bg-gray-300'}
                  ${[5, 9, 15, 22, 23].includes(i) ? 'bg-gray-500' : ''}
                `}
              />
            ))}
          </div>
          
          <div className="flex justify-center space-x-4 text-sm">
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-300 rounded-t-sm mr-2"></div>
              <span>Available</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-teal-500 rounded-t-sm mr-2"></div>
              <span>Selected</span>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 bg-gray-500 rounded-t-sm mr-2"></div>
              <span>Taken</span>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-medium mb-2">Booking Summary</h3>
          <div className="flex justify-between text-sm mb-1">
            <span>Adult Tickets (2)</span>
            <span>$24.00</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Convenience Fee</span>
            <span>$3.50</span>
          </div>
          <div className="flex justify-between text-sm mb-1">
            <span>Tax</span>
            <span>$2.75</span>
          </div>
          <div className="border-t mt-2 pt-2 flex justify-between font-bold">
            <span>Total</span>
            <span>$30.25</span>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <h3 className="font-medium mb-2">Share this booking</h3>
          <p className="text-sm text-gray-600 mb-3">Invite friends to join you at this showing</p>
          <div className="flex space-x-2">
            <button className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
              <Users size={14} className="mr-1" />
              Invite friends
            </button>
            <button className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
              <Share size={14} className="mr-1" />
              Share
            </button>
          </div>
        </div>
        
        <button className="w-full bg-teal-500 text-white rounded-lg py-3 font-medium">
          Complete Booking
        </button>
      </div>
    </div>
  );
}; 