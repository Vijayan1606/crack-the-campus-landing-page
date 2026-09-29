import { Section } from "@/components/ui/Section";
import { faqsData } from "@/data/faqs";

export function FaqSection() {
  return (
    <Section
      id="faq"
      badge="FAQ"
      title="Common questions about Crack The Campus"
      subtitle="Crack The Campus (CTC) is India's campus-to-career platform for engineering students and colleges — combining AI-proctored assessments, structured practice, CTC Score credentialing, and placement opportunities."
      className="faq-section"
    >
      <div className="faq-cards-list">
        {faqsData.map((faq) => (
          <article key={faq.id} className="faq-item-card">
            <h3 className="faq-item-question">{faq.question}</h3>
            <p className="faq-item-answer">{faq.answer}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
