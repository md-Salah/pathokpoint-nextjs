import { MiscHeader } from '@/micro-components';

const FAQ = () => {
  return (
    <div>
      <MiscHeader
        title="FAQ"
        subtitle="Answers to your most common questions."
      />
      <div className="layout-container layout-px my-4">
        <div className="join join-vertical w-full">
          <QA
            question="Do you sell both new and used books?"
            answer="Yes! We offer both new and used books. You can choose based on availability and preference. Used books are inspected to ensure they're in good condition."
          />
          <QA
            question="Can I check the condition of a used book before buying?"
            answer="Absolutely! We provide video previews in chat so you can see the exact condition of the used book before making a purchase."
          />
        </div>
      </div>
    </div>
  );
};

export default FAQ;

const QA = ({ question, answer }: { question: string; answer: string }) => {
  return (
    <div className="collapse collapse-arrow join-item border-base-300 border">
      <input type="radio" name="my-accordion-4" />
      <div className="collapse-title text-lg font-medium">{question}</div>
      <div className="collapse-content">
        <p>{answer}</p>
      </div>
    </div>
  );
};
