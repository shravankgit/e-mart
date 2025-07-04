import React, { useState } from 'react';
import { mobileData } from '../data/mobiles';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const MobilePage = () => {
	const [selectedProduct, setSelectedProduct] = useState([]);

	const companies = [...new Set(mobileData.map(item => item.company))];

	const companyHandler = (company) => {
		if (selectedProduct.includes(company)) {
			setSelectedProduct(selectedProduct.filter(item => item !== company));
		} else {
			setSelectedProduct([...selectedProduct, company]);
		}
	};

	const filteredProduct =
		selectedProduct.length === 0
			? mobileData
			: mobileData.filter((item) => selectedProduct.includes(item.company));

	return (
		<>
			<Navbar />
			{/* show mobile company names */}
			<div className="fullpage">
				<div className="pro-selected">
					{companies.map((company) => (
						<div key={company} className="pro-input">
							<label>
								<input
									type="checkbox"
									checked={selectedProduct.includes(company)}
									onChange={() => companyHandler(company)}
								/>
								{company}
							</label>
						</div>
					))}
				</div>
{/* show selected mobile information */}
				<div className="pageSection">
					{filteredProduct.map((item) => (
						<div key={item.id}>
							<Link to={`/mobiles/${item.id}`}>
								<div className="pageImg">
									<img src={item.image} alt="" />
								</div>
							</Link>
							<div className="proModel">
								Company: {item.company}, Price: {item.price}
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MobilePage;
