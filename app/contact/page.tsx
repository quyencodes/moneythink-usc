import Image from 'next/image';
import ContactForm from '@components/contact-form';

interface ContactProps {}

export default function Contact({}: ContactProps) {
  return (
    <div className="relative mb-32 flex min-h-[85vh] items-center overflow-hidden bg-cover bg-[50%] p-0">
      <Image
        className="absolute right-0 top-0 z-0 ml-auto hidden h-full w-full rounded-none lg:block lg:w-[50%] lg:rounded-bl-[10rem]"
        src="/img/curved.jpg"
        width={1001}
        height={708}
        alt="image"
        priority
      />
      <div className="container z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-12 flex lg:col-span-7 lg:col-start-2">
            <div className="bd-frost relative flex w-full flex-col gap-8 rounded-xl bg-white/80 p-12 shadow-2xl">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tight text-cyan-900">Contact Us</h2>
                <p className="text-primary text-lg text-slate-700 md:pr-12">
                  Send us a message and we&apos;ll get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
