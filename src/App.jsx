import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import { FeedbackList } from './components/FeedbackList';
import { Header } from './components/Header';
import { FeedbackStats } from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header text="Feedback App" />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
