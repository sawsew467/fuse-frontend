import React from 'react';
import './style.css';

const Description: React.FC = () => {
  return (
    <div className="description">
      <p>Anxiety is a normal, although unpleasant, part of life, and it can affect us in different ways and at different times of the day. Whereas stress is something that will come and go and it's all in how we handle those stressful moments.</p>
      <p>This simple exercise can help ease anxiety and stop it becoming overwhelming, however it's worth practicing for several minutes.</p>
      <p>Furthermore your breathing can contribute to your anxiety and panic, most people aren't really conscious of the way they're breathing, but generally, there are two types of breathing patterns:</p>
      <ul>
        <li>Thoracic (chest) breathing</li>
        <li>Diaphragmatic (abdominal) breathing</li>
      </ul>
      <p>Chest breathing causes an upset in the oxygen and carbon dioxide levels in the body resulting in increased heart rate, dizziness, muscle tension, and other physical sensations. Whereas during abdominal or diaphragmatic breathing, you take even, deep breaths.</p>
      <p>This is actually the way newborn babies naturally breathe and you're also probably using this kind of breathing when you're in deep sleep.</p>
    </div>
  );
};

export default Description;
