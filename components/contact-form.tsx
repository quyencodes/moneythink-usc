'use client';
import { useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
export default function ContactForm() {
  const { register } = useForm();

  return (
    <form>
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="flex flex-col p-2 text-sm">
          <label className="mb-2 ">Full Name</label>
          <input className="rounded-lg border-2 p-2 " placeholder="Full name"></input>
        </div>
        <div className="flex flex-col p-2 text-sm">
          <label className="mb-2">Email</label>
          <input className="rounded-lg border-2 p-2" placeholder="you@example.com"></input>
        </div>
      </div>
      <div className="mb-2 flex flex-col p-2 text-sm">
        <label className="mb-2">How can we help you?</label>
        <textarea
          className="min-h-[180px] rounded-lg border-2 p-2"
          name="textarea"
          placeholder="Describe your inquiry"
        ></textarea>
      </div>
      <div className="flex w-full justify-center lg:col-span-2">
        <Button variant="contained" className="bg-slate-800 py-3 text-white hover:bg-gray-900">
          Send Message
        </Button>
      </div>
    </form>
  );
}
