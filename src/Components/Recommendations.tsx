import React, { FC } from 'react';

// Define a type for the card data
interface CardData {
  image: string;
  title: string;
  text: string;
  link: string;
  linkText: string;
}

// Define a type for the top categories prop
interface Category {
  category: string;
  amount: number;
}

interface RecommendationsProps {
  topCategories: Category[];
}

// Dictionary with all category types and corresponding card information
const categoryCardData: { [key: string]: CardData } = {
    "Dining": {
      image: 'https://plus.unsplash.com/premium_photo-1675964349915-4a915535060c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Saving Money On Eating Out',
      text: 'Learn to save on dining out with tips like sharing meals, using apps, and finding deals.',
      link: 'https://www.thepennyhoarder.com/save-money/eat-out-cheaper/',
      linkText: 'See tips',
    },
    "Groceries": {
      image: 'https://images.unsplash.com/photo-1576866209837-5b02c5ad1b14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Save on Groceries',
      text: 'Discover ways to cut grocery costs with meal planning and coupons.',
      link: 'https://www.nerdwallet.com/article/finance/save-on-groceries',
      linkText: 'Learn more',
    },
    "Rent": {
      image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Lower Your Bills',
      text: 'Find out how to reduce monthly bills with smart budgeting and negotiation.',
      link: 'https://www.nerdwallet.com/article/finance/lower-your-rent',
      linkText: 'See how',
    },
    "Entertainment": {
      image: 'https://images.unsplash.com/photo-1554768804-50c1e2b50a6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Save on Entertainment',
      text: 'Save by exploring free activities, movie deals, and subscription management.',
      link: 'https://www.moneycrashers.com/how-to-save-money-on-entertainment/',
      linkText: 'Find out more',
    },
    "Travel": {
      image: 'https://images.unsplash.com/photo-1496150590317-f8d952453f93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Save on Transport',
      text: 'Cut down transport costs with rideshare hacks, biking, and transit passes.',
      link: 'https://www.thebalance.com/save-on-transportation-4174941',
      linkText: 'Explore options',
    },
    "Shopping": {
      image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'Shopping Smart',
      text: 'Get tips for buying essentials at the best prices.',
      link: 'https://www.consumerreports.org/cro/shopping/saving-money-on-groceries/index.htm',
      linkText: 'Shop smart',
    },
    "Utilities": {
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3',
      title: 'General Savings Tips',
      text: 'Explore ways to save on your utility bills and make the most of your budget.',
      link: 'https://www.consumer.gov/consumer-action/consumer-tips/utilities',
      linkText: 'See tips',
    }
  };
  

// Define the Recommendations component
const Recommendations: FC<RecommendationsProps> = ({ topCategories }) => {
    console.log(topCategories);
  // Sort categories by amount and take the top 3
  const topCategoryCards = topCategories
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3)
    .map(category => categoryCardData[category.category]);

  return (
    <div style={styles.container}>
      {topCategoryCards.map((card, index) => (
        <div key={index} style={styles.card}>
          <img src={card.image} alt={card.title} style={styles.image} />
          <h3 style={styles.title}>{card.title}</h3>
          <p style={styles.text}>
            {card.text}{' '}
            <a href={card.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              {card.linkText}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

// Define inline styles
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    padding: '20px',
  },
  card: {
    width: '300px',
    margin: '15px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    overflow: 'hidden',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  title: {
    padding: '15px 0 5px',
    fontSize: '1.2em',
    color: '#333',
  },
  text: {
    padding: '0 15px 15px',
    color: '#555',
    fontSize: '1em',
  },
  link: {
    color: '#1e90ff',
    textDecoration: 'none',
  },
};

export default Recommendations;
