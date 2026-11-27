import React from 'react';
import { useApp } from '../context/AppContext';
import { Button } from './Button';

export function CardEvent({ event }) {
  const { openModal, isFavorite, toggleFavorite } = useApp();
  const saved = isFavorite('events', event.id);

  return (
    <div className="bg-white rounded-16 border border-[#e2ebf3] shadow-card hover:shadow-lg transition-all duration-300 flex flex-col overflow-hidden group">
      {/* Event Image & Date Badge */}
      <div className="relative h-[132px] w-full overflow-hidden bg-slate-100">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Event Date Block (Day + Month) */}
        <div className="absolute top-2.5 left-3 bg-[#006cf9] text-white rounded-8 px-2.5 py-1.5 flex flex-col items-center justify-center min-w-[50px] shadow-md">
          <span className="text-[20px] font-bold leading-tight">{event.day}</span>
          <span className="text-[11px] font-semibold tracking-wider uppercase">{event.month}</span>
        </div>

        {/* Favorite Bookmark */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite('events', event.id, event.title);
          }}
          title={saved ? "Remove from saved" : "Save event"}
          className="absolute top-2.5 right-3 size-8 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center hover:scale-110 active:scale-95 transition-all cursor-pointer"
        >
          <svg 
            className={`w-4 h-4 ${saved ? 'text-[#006cf9] fill-[#006cf9]' : 'text-slate-600'}`} 
            fill={saved ? "currentColor" : "none"} 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 flex flex-col gap-1.5 flex-1">
        <h3 
          onClick={() => openModal('event-detail', event)}
          className="text-[15px] font-semibold text-[#071b38] leading-[22px] hover:text-[#006cf9] cursor-pointer line-clamp-1"
        >
          {event.title}
        </h3>

        <p className="text-[13px] text-[#00a3b3] font-medium">
          {event.type}
        </p>

        <p className="text-[13px] leading-[19px] text-[#637b97] line-clamp-2">
          {event.description}
        </p>

        <p className="text-[12.5px] text-[#637b97] mb-2">
          {event.venue} · {event.time}
        </p>

        <Button
          label="View event"
          style="Secondary"
          className="w-full py-2.5 text-[14px] rounded-12 mt-auto"
          onClick={() => openModal('event-detail', event)}
        />
      </div>
    </div>
  );
}
