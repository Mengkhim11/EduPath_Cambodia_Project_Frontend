import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Button } from '../components/Button';
import { BadgeInfo, BadgeTeal, BadgeAmber } from '../components/Badge';
import { adminSubmissions } from '../data/mockData';

export function AdminDashboardPage() {
  const { showToast } = useApp();
  const [submissions, setSubmissions] = useState(adminSubmissions);
  const [filterStatus, setFilterStatus] = useState('All');
  const [reviewModalItem, setReviewModalItem] = useState(null);

  const handleApprove = (id) => {
    setSubmissions(prev => prev.map(item => item.id === id ? { ...item, status: 'Published' } : item));
    setReviewModalItem(null);
    showToast('Submission approved and published live!');
  };

  const handleReject = (id) => {
    setSubmissions(prev => prev.map(item => item.id === id ? { ...item, status: 'Rejected' } : item));
    setReviewModalItem(null);
    showToast('Submission marked as rejected.');
  };

  const filtered = submissions.filter(item => {
    if (filterStatus === 'All') return true;
    return item.status === filterStatus;
  });

  return (
    <div className="flex flex-col w-full min-h-[85vh]">
      {/* Admin Top Header */}
      <section className="bg-[#071b38] text-white py-10 px-6 sm:px-12 lg:px-16 border-b border-[#1b4369]">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-[12px] font-bold tracking-wider uppercase text-[#00a9b6]">
              PORTAL ADMINISTRATION
            </span>
            <h1 className="text-[30px] sm:text-[38px] font-bold">
              Admin & Content Management
            </h1>
            <p className="text-white/80 text-[14px]">
              Manage university catalogs, verify curriculum submissions, and publish verified scholarships.
            </p>
          </div>

          <Button
            label="+ Add New Submission"
            style="Primary"
            className="bg-[#006cf9] hover:bg-[#005ad4] py-2.5 px-5 text-[14px] shrink-0"
            onClick={() => showToast('Opening new submission draft form...')}
          />
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 py-10 flex flex-col gap-8 w-full flex-1">
        
        {/* Metrics Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card">
            <span className="text-[13px] font-bold text-[#637b97] uppercase">Active Universities</span>
            <h3 className="text-[32px] font-bold text-[#071b38] mt-1">12</h3>
            <span className="text-[12px] text-emerald-600 font-semibold">100% verified MoEYS</span>
          </div>

          <div className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card">
            <span className="text-[13px] font-bold text-[#637b97] uppercase">Total Programs</span>
            <h3 className="text-[32px] font-bold text-[#071b38] mt-1">148</h3>
            <span className="text-[12px] text-blue-600 font-semibold">+8 added this month</span>
          </div>

          <div className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card">
            <span className="text-[13px] font-bold text-[#637b97] uppercase">Active Grants</span>
            <h3 className="text-[32px] font-bold text-[#071b38] mt-1">54</h3>
            <span className="text-[12px] text-amber-600 font-semibold">12 deadlines closing</span>
          </div>

          <div className="bg-white rounded-16 p-5 border border-[#e2ebf3] shadow-card">
            <span className="text-[13px] font-bold text-[#637b97] uppercase">Pending Reviews</span>
            <h3 className="text-[32px] font-bold text-[#071b38] mt-1">
              {submissions.filter(s => s.status === 'Pending Review').length}
            </h3>
            <span className="text-[12px] text-purple-600 font-semibold">Requires admin action</span>
          </div>
        </div>

        {/* Submissions Table Section */}
        <div className="bg-white rounded-20 border border-[#e2ebf3] shadow-card overflow-hidden flex flex-col">
          <div className="p-6 border-b border-[#e2ebf3] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-[20px] font-bold text-[#071b38]">Institutional Submissions</h2>
              <p className="text-[13px] text-[#637b97]">Review programs, scholarship notices, and campus open houses.</p>
            </div>

            <div className="flex gap-2 text-[13px]">
              {['All', 'Pending Review', 'Published'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1.5 rounded-8 font-semibold transition-colors ${
                    filterStatus === status ? 'bg-[#006cf9] text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#f8fbfe] border-b border-[#e2ebf3] text-[12px] font-bold text-[#637b97] uppercase tracking-wider">
                  <th className="py-3.5 px-6">Title & Category</th>
                  <th className="py-3.5 px-6">Institution</th>
                  <th className="py-3.5 px-6">Submitted By</th>
                  <th className="py-3.5 px-6">Date</th>
                  <th className="py-3.5 px-6">Status</th>
                  <th className="py-3.5 px-6 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-[14px]">
                {filtered.map(sub => (
                  <tr key={sub.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-4 px-6">
                      <strong className="text-[#071b38] block">{sub.title}</strong>
                      <span className="text-[12px] text-[#00a3b3] font-medium">{sub.category}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-700 font-medium">{sub.institution}</td>
                    <td className="py-4 px-6 text-slate-600 text-[13px]">{sub.submittedBy}</td>
                    <td className="py-4 px-6 text-slate-500 text-[13px]">{sub.submittedDate}</td>
                    <td className="py-4 px-6">
                      {sub.status === 'Published' ? (
                        <BadgeTeal label="Published" />
                      ) : sub.status === 'Rejected' ? (
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[12px] font-semibold">Rejected</span>
                      ) : (
                        <BadgeAmber label="Pending Review" />
                      )}
                    </td>
                    <td className="py-4 px-6 text-right">
                      <Button
                        label="Review"
                        style="Secondary"
                        className="py-1.5 px-3 text-[13px] rounded-8"
                        onClick={() => setReviewModalItem(sub)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Review Modal (Admin · Review submission · 12:761) */}
      {reviewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071b38]/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-20 shadow-2xl border border-[#e2ebf3] max-w-[560px] w-full p-6 sm:p-8 flex flex-col gap-5 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-[20px] font-bold text-[#071b38]">Review Submission</h3>
              <button onClick={() => setReviewModalItem(null)} className="text-slate-400 hover:text-slate-700">✕</button>
            </div>

            <div>
              <BadgeTeal label={reviewModalItem.category} className="mb-1" />
              <h4 className="text-[18px] font-bold text-[#071b38]">{reviewModalItem.title}</h4>
              <p className="text-[13px] text-[#637b97] mt-0.5">{reviewModalItem.institution} · Submitted by {reviewModalItem.submittedBy}</p>
            </div>

            <div className="bg-[#f8fbfe] rounded-12 p-4 border border-[#e2ebf3]">
              <span className="text-[12px] font-bold text-[#637b97] uppercase tracking-wider block mb-1">
                Description & Impact
              </span>
              <p className="text-[14px] text-slate-700 leading-relaxed">
                {reviewModalItem.details}
              </p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                label="Approve & Publish Live"
                style="Primary"
                className="flex-1 py-2.5 text-[14px]"
                onClick={() => handleApprove(reviewModalItem.id)}
              />
              <Button
                label="Reject"
                style="Secondary"
                className="py-2.5 px-4 text-[14px] text-red-600 hover:bg-red-50"
                onClick={() => handleReject(reviewModalItem.id)}
              />
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
