/**
* @author Tarandeep Singh
* @Description This file contains code in React for Hotel Description Page
*/

var HotelDescription = React.createClass({
	render: function(){
		return (
			<div className="descContainer">
				<div className="blk descHeadContainer">
					<div className="descBackBtn"></div>
					<div className="blk">
						<div className="mainImage fleft">
							<img src="img/hotel1.jpg" alt="Brand Hotel" />
						</div>
						<div className="mapContainer">
							<img src="img/map.jpg" alt="Location Map" />
						</div>						
					</div>
					<div className="descHeader">
						<div className="descType">HOTEL</div>
						<div className="descName">Hotel Football Old Trafford</div>
						<div className="descRating">* * * * *</div>
					</div>
					<div className="blk descExtendedContainer">
						<div className="descTripAdvisorReview">
							<div className="descTripReview fleft">
								<div className="desRevText"><i className="descReviewIcon"></i>34 Reviews </div>
							</div>
						</div>
						<div className="descRankingContainer fright">
							<div className="desRevText">
								<span className="descRank">#17</span> of <span className="rankTotal">116</span> htoels in <span className="reviewCity">Manchester</span>
							</div>
						</div>
					</div>
				</div>
				<div className="descDetailContainer">
					<div className="blk descDetailComponent">
						<div className="descPriceContainer fleft">
							<div className="descHeadTxt">STARTS</div>
							<div className="descPrice"><i className="descRupeeIcon"></i>1000</div>
						</div>
						<div className="actionBtn fright">
							<button className="descBtn">ADD TO ITINERARY</button>
						</div>
						<hr />
					</div>	
					<div className="descDetailComponent">
						<div className="descInfoContainer">
							<div className="descHeadTxt">DESCRIPTION</div>
							<div className="descTextContainer">
								<div className="descText">The Midland - QHotels is an award-winning, 4-star luxury hotel with a spa in Manchester city centre. It offers stylish, air-conditioned rooms with free WiFi.</div>
								<div className="descText">Plush rooms and suites offer free WiFi, tea and coffeemaking facilities, flat-screen TVs and 24-hour room service.</div>
							</div>
							<div className="descMore">READ MORE</div>
							<div className="descfacContainer blk">
								<div className="descFac fleft"><i className="descFacIcon1"></i>WIFI</div>
								<div className="descFac fleft"><i className="descFacIcon2"></i>BREAKFAST, DINNER</div>
							</div>
						</div>
						<hr />
					</div>	
					<div className="descDetailComponent">
						<div className="descDetailsContainer">
							<div className="descDetails">						
								<div className="descHeadTxt">PRICE RANGE</div>
								<div className="descDetail"><i className="descDetailIcon1"></i>9,200 - 29,386 </div>
							</div>
							<div className="descDetails">						
								<div className="descHeadTxt">ADDRESS</div>
								<div className="descDetail"><i className="descDetailIcon2"></i>16 Peter St, Manchester M60 2DS, United Kingdom </div>
							</div>
							<div className="descDetails">						
								<div className="descHeadTxt">WEBSITE</div>
								<div className="descDetail"><i className="descDetailIcon3"></i>www.themidlands.com </div>
							</div>
							<div className="descDetails">						
								<div className="descHeadTxt">TELEPHONE</div>
								<div className="descDetail"><i className="descDetailIcon4"></i>+44 870 442 1994 </div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
});


ReactDOM.render(
	<HotelDescription data={hotelDesc} />,
	document.getElementById("hotelDescription")
);