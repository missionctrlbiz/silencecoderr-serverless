import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { portfolio } from '../../utility/portfolio';
import PortfolioItem from './PortfolioItem';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

function Portfolio() {
    const [category, setCategory] = useState('all')
    const [activeTab, setActiveTab] = useState(0);

    const categories = [
        "all",
        'design',
        'development',
        'graphics',
        'templates'
    ];

    const filterProducts = () => {
        if (category !== 'all') {
            return portfolio.filter((portfolio) => portfolio.categories.indexOf(category) !== -1);
        }
        return portfolio;
    }

    const handleCategory = (_category) => {
        setCategory(_category);

    }

    return (
        <>
            <section id="portfolio" className="bx-portfolio-section bx-section portfolio padding-tb-80">
                <div className="container">
                    <Fade triggerOnce duration={2000} direction='up' delay={300} className="title" >
                        <p className="ligh-title">Portfolio</p>
                        <h2>My <span className="primary-clr">Portfolio</span></h2>
                    </Fade>
                    <div className="row m-b-minus-24px">
                        <div className="portfolio-content">
                            <div>
                                <div className="row">
                                    <Tabs selectedIndex={activeTab} onSelect={(index) => setActiveTab(index)}>
                                        <Fade triggerOnce duration={2000} direction='up' delay={400} className="col-sm-12">
                                            <div className="portfolio-tabs">
                                                <TabList>
                                                    {categories.map((_category, index) => (
                                                        <Tab onClick={() => handleCategory(_category)} key={index} className={category === _category ? 'filter mixitup-control-active' : ''} data-filter={_category}>{_category}</Tab>
                                                    ))}
                                                </TabList>
                                            </div>
                                        </Fade>

                                        <Fade triggerOnce duration={2000} direction='in' className="col-md-12 col-sm-12">
                                            {categories.map((_category, index) => (
                                                <TabPanel key={index} >
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="portfolio-content-items">
                                                            <div className="row m-b-minus-30px mix">
                                                                {filterProducts().map((data, i) => (
                                                                    <PortfolioItem key={i} data={data} selectedCategory={category} />
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </TabPanel>
                                            ))}
                                        </Fade>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
