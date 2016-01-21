/**
* @author Tarandeep Singh
* @Description This file contains code in React for Activity Description Page
*/

var ActivityDescription = React.createClass({
	render: function(){
		return (
			<div className="descContainer">
				<div className="blk descHeadContainer">
					<div className="descBackBtn"></div>
					<div className="blk">
						<div className="mainImage fleft">
							<img src="img/activityMain.jpg" alt="Brand Hotel" />
						</div>
						<div className="mapContainer">
							<img src="img/map.jpg" alt="Location Map" />
						</div>						
					</div>
					<div className="descHeader actDescHeader">
						<div className="descType">TOUR</div>
						<div className="descName">The Smiths and Morrissey Bus Tour</div>
						<div className="descRating">* * * * *</div>
					</div>
				</div>
				<div className="descDetailContainer">
					<div className="blk descDetailComponent">
						<div className="descPriceContainer fleft">
							<div className="descHeadTxt">STARTS</div>
							<div className="descPrice"><i className="descRupeeIcon"></i>1000</div>
						</div>
						<div className="actionBtn fright">
							<button className="descBtn actBtn">REMOVE</button>
						</div>
						<hr />
					</div>	
					<div className="descDetailComponent">
						<div className="descInfoContainer">
							<div className="descHeadTxt">DESCRIPTION</div>
							<div className="descTextContainer">
								<div className="descText">The Smiths & Morrissey 3 Hour Bus Tour, tour guide Craig Gill from the band Inspiral Carpets will take you on a tour of musical heritage landmarks synonymous with The Smiths, Morrissey and Johnny Marr. You will be given a full tour of Salford Lads Club and free entry into The Smiths room, the tour includes and free tea and coffee, the tour will also take you to concert venues, places referenced in songs and promotional video locations.</div>
							</div>
							<div className="descMore">READ MORE</div>
						</div>
						<hr />
					</div>	
					<div className="descDetailComponent">
						<div className="descDetailsContainer">
							<div className="descDetails">						
								<div className="descHeadTxt">DURATION</div>
								<div className="descDetail"><i className="descDetailIcon5"></i> 3 hours (approx) </div>
							</div>
							<div className="descDetails">						
								<div className="descHeadTxt">OPENING HOURS</div>
								<div className="descDetail"><i className="descDetailIcon6"></i> Open Daily: 09:35 am — 07:35 pm </div>
							</div>
							<div className="descDetails">						
								<div className="descHeadTxt">ADDRESS</div>
								<div className="descDetail"><i className="descDetailIcon7"></i> 16 Peter St, Manchester M60 2DS, United Kingdom </div>
							</div>
						</div>
						<hr />
					</div>		
					<div className="descDetailComponent">
						<div className="descGalleryContainer">
							<div className="descGalleryContainer">						
								<div className="descHeadTxt">PHOTOS</div>
								<div className="descGallery">
									<img src="img/gallery1.jpg" alt="Gallery Image" />
									<img src="img/gallery2.jpg" alt="Gallery Image" />
									<img src="img/gallery3.jpg" alt="Gallery Image" />
									<img src="img/gallery4.jpg" alt="Gallery Image" />
									<img src="img/gallery5.jpg" alt="Gallery Image" className="lastGalleryImg" />
								</div>
							</div>
						</div>
					</div>	
				</div>
			</div>
		);
	}
});


ReactDOM.render(
	<ActivityDescription data={activityDesc} />,
	document.getElementById("activityDescription")
);