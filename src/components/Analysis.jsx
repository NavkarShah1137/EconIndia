import React from 'react';
import Card from './Card';

function Analysis() {
  return (
    <div className='container mt-6'>
      <h1 className="title has-text-centered" style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '2rem' }}>Analysis</h1>
      <div className='columns is-multiline'>
        <Card
          title='Implications of AI on Indian Economy : Benefits and Loses'
          description='AI can drive economic growth in India by increasing efficiency and productivity.
          AI can help businesses in India make better decisions, improve customer experiences, and reduce costs.
          AI has the potential to drive innovation in various sectors, creating new markets and job opportunities.'
          imageSrc='https://www.simplilearn.com/ice9/free_resources_article_thumb/Advantages_and_Disadvantages_of_artificial_intelligence.jpg'
          readMore={true}
        />
        <Card
          title='Economic Activity : Forecasting based on the Sentiment Analysis of News'
          description='Sentiment analysis of news can help forecast economic activity by identifying positive or negative sentiment towards companies, sectors or the economy as a whole.
          Forecasting economic activity through sentiment analysis can help businesses to make better decisions and adjust their strategies accordingly.
          Sentiment analysis of news can help investors to make informed decisions by providing them with insights into market trends and sentiment.'
          imageSrc='https://www.altexsoft.com/media/2018/09/sentiment_analysis.jpg'
          readMore={true}
        />
        <Card
          title='How can the Artificial Intelligence of Things create public value?'
          description='Enhanced Public Services: The Artificial Intelligence of Things can help improve public services by providing real-time data to city planners, emergency responders and utility providers, which can help them to make more informed decisions and improve response times.
          Improved Public Health and Safety: The Artificial Intelligence of Things can help improve public health and safety by monitoring air quality, water quality, and other environmental factors that can impact health. AI-powered sensors can detect potential hazards and alert relevant authorities, improving the overall safety of the public.
          Increased Efficiency and Sustainability: The Artificial Intelligence of Things can help create public value by increasing efficiency and sustainability in cities. By optimizing energy usage, reducing waste, and improving transportation, cities can become more sustainable and reduce their impact on the environment, which benefits everyone.'
          imageSrc='https://images.prismic.io/intuzwebsite/5b53bf45-9093-4508-9cd6-81e057dd9b4c_AIoT+Banner.png?auto=compress,format'
          readMore={true}
        />
        <Card
          title='Cashless Payment Policy and its effects on Economic Growth of India'
          description='Increased Efficiency: Cashless payment policies can increase the efficiency of financial transactions, reducing the time and costs associated with handling cash. This can improve the overall business environment and lead to increased economic growth.
          Greater Financial Inclusion: Cashless payment policies can increase financial inclusion, particularly for those who are unbanked or underbanked. This can help to increase access to financial services, which can drive economic growth by enabling greater participation in the economy.
          Boost to Digital Economy: Cashless payment policies can provide a boost to the digital economy by driving the adoption of digital payment systems and encouraging the development of new payment technologies. This can create new business opportunities, jobs, and industries, leading to increased economic growth.'
          imageSrc='https://imageio.forbes.com/specials-images/imageserve/616ecfb38ace5c9943252b6e/Close-up-of-a-woman-s-hand-paying-with-her-smartphone-in-a-cafe--scan-and-pay-a-bill/960x0.jpg?format=jpg&width=960'
          readMore={true}
        />
        <Card
          title='Application of Machine Learning Algorithms for Sustainable Business'
          description='Predictive Analytics: Machine learning algorithms can be used to analyze vast amounts of data and generate insights that can help businesses make informed decisions about sustainable business management practices. Predictive analytics can be used to identify opportunities for reducing waste, improving energy efficiency, and minimizing environmental impacts.
          Optimization: Machine learning algorithms can be used to optimize business processes, such as supply chain management and logistics, to reduce costs and improve sustainability. By analyzing data and identifying patterns, machine learning algorithms can help businesses make more efficient and sustainable decisions.
          Real-time Monitoring: Machine learning algorithms can be used for real-time monitoring of environmental data, such as air quality, water quality, and weather patterns. This can help businesses take proactive measures to mitigate potential risks and ensure sustainable operations.'
          imageSrc='https://d2908q01vomqb2.cloudfront.net/fc074d501302eb2b93e2554793fcaf50b3bf7291/2022/02/10/Figure-1.-ML-lifecycle.jpg'
          readMore={true}
        />
        <Card
          title='Application of Machine Learning Regression to feature selection'
          description='Improved Accuracy: Machine learning regression algorithms can be used for feature selection to improve the accuracy of predictive models. By selecting only the most relevant features, regression algorithms can reduce noise in the data and improve model performance.
          Time and Cost Savings: Machine learning regression algorithms can automate the feature selection process, saving time and reducing costs associated with manual feature selection. This can enable businesses to analyze large datasets more efficiently and effectively.
          Identifying Important Variables: Machine learning regression algorithms can help identify the most important variables that influence the outcome of a model. This can help businesses gain a deeper understanding of their data and make more informed decisions based on the most relevant information.'
          imageSrc='https://www.ramco.com/hubfs/shutterstock_1184492086-4.jpg'
          readMore={true}
        />
      </div>
      <p></p>
    </div>
  );
}

export default Analysis;
