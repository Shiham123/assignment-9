import React from 'react';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react';

const Faq = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
    <div className="bg-fontColor py-20 rounded-t-[100px] mt-[15rem]">
      <div className="flex justify-center items-center">
        <h1 className="text-[35px] md:text-[45px] lg:text-[58px] leading-[68px] text-white font-bold pb-[150px] m-auto text-center">
          Frequently asked questions
        </h1>
      </div>
      <div className="md:flex md:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-4 px-20">
        <div className="lg:col-span-1 lg:w-full md:w-6/12">
          <img
            className="lg:rounded-full md:rounded-lg border-4 border-fontActive"
            src="https://raw.githubusercontent.com/Shiham123/img-for-creative/75fe29f91d898ac3fc888d40efc4150297fcfb5b/DrawKit%20Vector%20Illustration%20Health%20%26%20Medical%20(3).svg"
            alt=""
          />
        </div>
        {/*  */}
        <div className="lg:col-span-3 lg:w-8/12 mx-auto mt-10">
          <Accordion
            open={open === 1}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'text-[28px] leading-[38px] text-white font-semibold font-inter hover:text-fontActive'
                  : 'text-[28px] leading-[38px] text-white font-semibold font-inter opacity-80 hover:text-fontActive'
              }`}
            >
              What services does the hospital provide?
            </AccordionHeader>
            <AccordionBody className="pt-0 font-normal text-[16px] leading-[24px] text-white opacity-60">
              <ul>
                <li className="my-4">Emergency care</li>
                <li className="my-4">General medical and surgical care</li>
                <li className="my-4">General medical and surgical care</li>
                <li className="my-4">
                  Specialized departments like cardiology, orthopedics,
                  pediatrics, and mores
                </li>
                <li className="my-4">
                  Diagnostic services such as X-rays, MRIs, and lab tests
                </li>
                <li className="my-4">Rehabilitation services</li>
                <li className="my-4">Maternity and neonatal care</li>
                <li className="my-4">Outpatient clinics for follow-up care</li>
              </ul>
            </AccordionBody>
          </Accordion>

          {/*  */}
          <Accordion
            open={open === 2}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'text-[28px] leading-[38px] text-white font-semibold font-inter hover:text-fontActive'
                  : 'text-[28px] leading-[38px] text-white font-semibold font-inter opacity-80 hover:text-fontActive'
              }`}
            >
              How can I make an appointment or schedule a visit?
            </AccordionHeader>
            <AccordionBody className="pt-0 font-normal text-[16px] leading-[24px] text-white opacity-60">
              <ul>
                <span className="font-bold">
                  How can I make an appointment or schedule a visit?
                </span>
                <li className="my-4">
                  <span className="font-semibold">Online : </span>
                  Through the hospital&apos;s website or patient portal, where
                  you can book appointments, check availability, and even fill
                  out necessary forms.
                </li>
                <li className="my-4">
                  <span className="font-semibold">Phone : </span>
                  Call our appointment hotline, and our friendly staff will
                  assist you in finding a suitable time.
                </li>
                <li className="my-4">
                  <span className="font-semibold">In-person : </span>
                  Visit the hospital reception desk or the relevant department
                  directly to schedule your appointment
                </li>
              </ul>
            </AccordionBody>
          </Accordion>

          {/*  */}
          <Accordion
            open={open === 3}
            className="mb-2 rounded-lg border border-blue-gray-100 px-4"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className={`border-b-0 transition-colors ${
                open === 1
                  ? 'text-[28px] leading-[38px] text-white font-semibold font-inter hover:text-fontActive'
                  : 'text-[28px] leading-[38px] text-white font-semibold font-inter opacity-80 hover:text-fontActive'
              }`}
            >
              What insurance plans are accepted at the hospital?
            </AccordionHeader>
            <AccordionBody className="pt-0 font-normal text-[16px] leading-[24px] text-white opacity-60">
              <ul className="my-4">
                <span className="font-semibold">
                  We accept a wide range of insurance plans to ensure that
                  patients have access to quality healthcare. It&apos;s
                  essential to verify your specific insurance coverage by
                </span>
                <li className="my-4">
                  Contacting your insurance provider to confirm that our
                  hospital is in-network.
                </li>
                <li className="my-4">
                  Checking with our billing department, which can help you
                  understand your coverage and assist with any billing
                  inquiries.
                </li>
                <li className="my-4">
                  We also offer self-pay options and financial assistance
                  programs for those without insurance or with limited coverage,
                  ensuring that everyone can receive the care they need..
                </li>
              </ul>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
