import './ArticlePage.css';
import Navbar from '../../components/Navbar/Navbar';
import ArticleCard from '../../components/ArticleCard/ArticleCard';

import article01 from '../../assets/articles/articles01.png';

const ArticlePage = () => {
  

  return (
    <div>
      
      <ArticleCard image={article01} title={"How requesting a credit limit increase affects your credit"}/>
    </div>
    
  );
};

export default ArticlePage;