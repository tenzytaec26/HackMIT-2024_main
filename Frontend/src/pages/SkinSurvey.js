import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/Button';

const SurveyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${props => props.theme.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const QuestionCard = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

const Question = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.primary};
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 8px;
  font-size: 1rem;
  color: ${props => props.theme.text};
  background-color: ${props => props.theme.white};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const OptionGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const OptionLabel = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  background-color: ${props => props.checked ? props.theme.primary : props.theme.background};
  color: ${props => props.checked ? props.theme.white : props.theme.text};
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background-color: ${props => props.theme.primary}80;
    color: ${props => props.theme.white};
  }
`;

const HiddenInput = styled.input`
  display: none;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 8px;
  resize: vertical;
  font-size: 1rem;
  color: ${props => props.theme.text};
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const OtherInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 8px;
  font-size: 1rem;
  color: ${props => props.theme.text};
  margin-top: 0.5rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const surveyQuestions = [
  {
    id: 'skinTypeTest',
    question: 'Let us determine your skin type. Please answer the following:',
    type: 'skinTypeTest',
    subQuestions: [
      {
        id: 'afterWashing',
        question: 'How does your skin feel after washing?',
        options: ['Tight and dry', 'Comfortable', 'Oily all over']
      },
      {
        id: 'midDay',
        question: 'By mid-day, how does your T-zone (forehead, nose, chin) look?',
        options: ['Matte', 'Slightly shiny', 'Very oily or shiny']
      },
      {
        id: 'pores',
        question: 'How visible are your pores?',
        options: ['Not visible or very small', 'Visible in T-zone', 'Large and visible all over']
      },
      {
        id: 'sensitivity',
        question: 'How does your skin react to new products?',
        options: ['Often becomes irritated', 'Rarely has a reaction', 'Almost never has a reaction']
      }
    ]
  },
  {
    id: 'skinConcernsAndGoals',
    question: 'What are your main skin concerns and skincare goals?',
    type: 'checkbox',
    options: [
      'Reduce acne',
      'Anti-aging / Reduce wrinkles',
      'Even skin tone / Reduce dark spots',
      'Hydration',
      'Reduce oiliness',
      'Minimize pores',
      'Reduce redness',
      'Improve skin texture',
      'Sun protection',
      'Sensitive skin care',
      'Other'
    ],
    hasOther: true
  },
  {
    id: 'currentRoutine',
    question: 'How would you describe your current skincare routine?',
    type: 'select',
    options: [
      'No routine',
      'Basic (Cleanse only)',
      'Moderate (Cleanse and moisturize)',
      'Advanced (Multiple steps including treatments)',
      'Extensive (5+ step routine)'
    ]
  },
  {
    id: 'allergies',
    question: 'Do you have any known allergies or sensitivities to skincare ingredients?',
    type: 'radio',
    options: ['Yes', 'No', 'Not sure']
  },
  {
    id: 'lifestyle',
    question: 'Which of the following describe your lifestyle? (Select all that apply)',
    type: 'checkbox',
    options: [
      'Active/Exercise regularly',
      'Healthy diet',
      'Drink 8+ glasses of water daily',
      'Get 7-9 hours of sleep',
      'High stress levels',
      'Frequent sun exposure',
      'Smoke or exposed to second-hand smoke',
      'Other'
    ],
    hasOther: true
  },
  {
    id: 'sunscreen',
    question: 'How often do you use sunscreen?',
    type: 'select',
    options: ['Daily', 'Occasionally', 'Rarely', 'Never']
  },
  {
    id: 'makeup',
    question: 'How often do you wear makeup?',
    type: 'select',
    options: ['Daily', 'Few times a week', 'Occasionally', 'Rarely', 'Never']
  },
  {
    id: 'additionalInfo',
    question: 'Is there anything else you would like to share about your skin or skincare routine?',
    type: 'textarea'
  }
];

function SkinSurvey() {
  const [answers, setAnswers] = useState({});
  const [otherInputs, setOtherInputs] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (id, value) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const handleCheckboxChange = (id, option, isChecked) => {
    setAnswers(prev => {
      const currentOptions = prev[id] || [];
      if (isChecked) {
        return { ...prev, [id]: [...currentOptions, option] };
      } else {
        return { ...prev, [id]: currentOptions.filter(item => item !== option) };
      }
    });
  };

  const handleOtherInputChange = (id, value) => {
    setOtherInputs(prev => ({ ...prev, [id]: value }));
  };

  const determineSkinType = (answers) => {
    let dryScore = 0;
    let oilyScore = 0;
    let sensitiveScore = 0;

    if (answers.afterWashing === 'Tight and dry') dryScore++;
    if (answers.afterWashing === 'Oily all over') oilyScore++;

    if (answers.midDay === 'Matte') dryScore++;
    if (answers.midDay === 'Very oily or shiny') oilyScore++;

    if (answers.pores === 'Not visible or very small') dryScore++;
    if (answers.pores === 'Large and visible all over') oilyScore++;

    if (answers.sensitivity === 'Often becomes irritated') sensitiveScore++;

    if (sensitiveScore > 0) return 'Sensitive';
    if (dryScore > oilyScore) return 'Dry';
    if (oilyScore > dryScore) return 'Oily';
    if (dryScore === oilyScore) return 'Combination';
    return 'Normal';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAnswers = { ...answers };
    Object.keys(otherInputs).forEach(id => {
      if (answers[id] === 'Other' || (Array.isArray(answers[id]) && answers[id].includes('Other'))) {
        finalAnswers[id] = Array.isArray(answers[id]) 
          ? [...answers[id].filter(item => item !== 'Other'), otherInputs[id]]
          : otherInputs[id];
      }
    });

    // Determine skin type
    if (finalAnswers.skinTypeTest) {
      const skinType = determineSkinType(finalAnswers.skinTypeTest);
      finalAnswers.calculatedSkinType = skinType;
    }

    console.log(finalAnswers);
    navigate('/analysis');
  };

  return (
    <SurveyContainer>
      <Title>Skin Assessment Survey</Title>
      <form onSubmit={handleSubmit}>
        {surveyQuestions.map((q) => (
          <QuestionCard key={q.id}>
            <Question>{q.question}</Question>
            {q.type === 'select' && (
              <>
                <Select
                  value={answers[q.id] || ''}
                  onChange={(e) => handleInputChange(q.id, e.target.value)}
                >
                  <option value="">Select an option</option>
                  {q.options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </Select>
                {q.hasOther && answers[q.id] === 'Other' && (
                  <OtherInput
                    type="text"
                    placeholder="Please specify"
                    value={otherInputs[q.id] || ''}
                    onChange={(e) => handleOtherInputChange(q.id, e.target.value)}
                  />
                )}
              </>
            )}
            {q.type === 'radio' && (
              <OptionGroup>
                {q.options.map((option) => (
                  <OptionLabel key={option} checked={answers[q.id] === option}>
                    <HiddenInput
                      type="radio"
                      name={q.id}
                      value={option}
                      checked={answers[q.id] === option}
                      onChange={(e) => handleInputChange(q.id, e.target.value)}
                    />
                    {option}
                  </OptionLabel>
                ))}
              </OptionGroup>
            )}
            {q.hasOther && q.type === 'radio' && answers[q.id] === 'Other' && (
              <OtherInput
                type="text"
                placeholder="Please specify"
                value={otherInputs[q.id] || ''}
                onChange={(e) => handleOtherInputChange(q.id, e.target.value)}
              />
            )}
            {q.type === 'checkbox' && (
              <>
                <OptionGroup>
                  {q.options.map((option) => (
                    <OptionLabel key={option} checked={(answers[q.id] || []).includes(option)}>
                      <HiddenInput
                        type="checkbox"
                        name={q.id}
                        value={option}
                        checked={(answers[q.id] || []).includes(option)}
                        onChange={(e) => handleCheckboxChange(q.id, option, e.target.checked)}
                      />
                      {option}
                    </OptionLabel>
                  ))}
                </OptionGroup>
                {q.hasOther && (answers[q.id] || []).includes('Other') && (
                  <OtherInput
                    type="text"
                    placeholder="Please specify"
                    value={otherInputs[q.id] || ''}
                    onChange={(e) => handleOtherInputChange(q.id, e.target.value)}
                  />
                )}
              </>
            )}
            {q.type === 'textarea' && (
              <TextArea
                value={answers[q.id] || ''}
                onChange={(e) => handleInputChange(q.id, e.target.value)}
                rows={4}
                placeholder="Type your answer here..."
              />
            )}
            {q.type === 'skinTypeTest' && (
              <>
                {q.subQuestions.map((subQ) => (
                  <QuestionCard key={subQ.id}>
                    <Question>{subQ.question}</Question>
                    <OptionGroup>
                      {subQ.options.map((option) => (
                        <OptionLabel 
                          key={option} 
                          checked={answers[q.id]?.[subQ.id] === option}
                        >
                          <HiddenInput
                            type="radio"
                            name={`${q.id}-${subQ.id}`}
                            value={option}
                            checked={answers[q.id]?.[subQ.id] === option}
                            onChange={(e) => handleInputChange(q.id, {
                              ...answers[q.id],
                              [subQ.id]: e.target.value
                            })}
                          />
                          {option}
                        </OptionLabel>
                      ))}
                    </OptionGroup>
                  </QuestionCard>
                ))}
              </>
            )}
          </QuestionCard>
        ))}
        <ButtonContainer>
          <Button type="submit">Submit Survey</Button>
        </ButtonContainer>
      </form>
    </SurveyContainer>
  );
}

export default SkinSurvey;