import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { siteConfig } from "@/config/next-inject"

export const FAQ = () => {
  return (
    <div id="faq">
      <div className="mx-auto my-24 flex max-w-6xl flex-col space-y-6 lg:flex-row lg:gap-36 lg:space-y-0">
        <div className="shrink-0">
          {/* FAQ Title */}
          <div className="w-full text-center text-xl font-bold tracking-tight text-white md:text-start md:text-3xl">
            Frequently Asked Questions
          </div>
          {/* CTA to email additional questions */}
          <div className="mt-2 text-center lg:text-start">
            <p className="font-bold">Have another question?</p>
            Please do not hesitate to contact us by{" "}
            <Link
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              href={`mailto:${siteConfig.email}`}
            >
              email
            </Link>{" "}
          </div>
        </div>
        {/* The FAQ questions rendered in an accordion */}
        <Accordion type="single" collapsible className="mx-4 md:mx-0 md:w-full">
          {faq.map((q) => (
            <AccordionItem key={q.questionName} value={q.questionName}>
              <AccordionTrigger className="text-start">
                {q.questionName}
              </AccordionTrigger>
              <AccordionContent>{q.acceptedAnswerText}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
// ! The actual faq questions, change these to match your product.
export const faq = [
  {
    questionName: "What is this software used for?",
    acceptedAnswerText:
      "Our software provides comprehensive tools to help businesses streamline their operations, improve productivity, and achieve better results in their specific industry.",
  },
  {
    questionName: "How do I get started with the software?",
    acceptedAnswerText:
      "To get started, sign up for an account on our website, then follow the onboarding instructions provided in your dashboard. You can also access our help center for detailed tutorials and support.",
  },
  {
    questionName: "What pricing plans do you offer?",
    acceptedAnswerText:
      "We offer a variety of pricing plans to suit different needs, including a free trial, basic, and premium options. Visit our pricing page for detailed information on each plan.",
  },
  {
    questionName: "Is my data secure?",
    acceptedAnswerText:
      "Yes, we prioritize data security and utilize industry-standard encryption methods to protect your information. Our servers are regularly updated and monitored to ensure your data is safe.",
  },
  {
    questionName: "How can I contact customer support?",
    acceptedAnswerText:
      "You can reach our customer support team via email, live chat, or by submitting a ticket through your account dashboard. We strive to respond to all inquiries within 24 hours.",
  },
]
