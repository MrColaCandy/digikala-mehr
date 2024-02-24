import Button from '@components/Button';
import { FaChevronLeft } from 'react-icons/fa';
import './style.css';

function TextBox({
  className = '',
  title,
  text = null,
  maxLines = 3,
  lineLength = 12,
  showFullText,
  setShowFullText = () => {},
  variant = 0,
}) {
  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  const getTruncatedText = () => {
    if (!text) return;
    const words = text.split(' ');
    const truncatedWords = words.slice(0, maxLines * lineLength);
    return truncatedWords.join(' ') + '...';
  };

  return (
    <div className="textBox">
      <div className={showFullText ? 'textBox__text' : 'textBox__text--truncated'}>
        <div className={`textBox__header${!showFullText ? '' : '--truncated'} ${className}`}>
          {title}
        </div>
        {showFullText ? text : getTruncatedText()}
      </div>
      {variant === 0 ? (
        <div onClick={toggleText} className={`textBox__button${!showFullText ? '--truncated' : ''}`}>
          <div>{showFullText ? 'بستن' : 'بیشتر بدانید'}</div>
          <FaChevronLeft size={'10px'} />
        </div>
      ) : (
        <>
          <hr className="textBox__hr" />
          <Button
            width={375}
            className="textBox_button"
            text={showFullText ? 'بستن' : 'بیشتر بدانید'}
            onClick={() => setShowFullText(!showFullText)}
          />
        </>
      )}
    </div>
  );
}

export default TextBox;
