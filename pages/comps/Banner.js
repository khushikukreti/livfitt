import React from 'react'
import Image from 'next/image'

function Banner({imgURL}) {
    return (
        <div>
            <section className="home-second-banner third-banner">
		<div className="container">
			<div className="row">
				
				<div className="col-md-12">
					<div className="home-second-banner1 effect-layla">
						<a>
								<Image src={`${imgURL}`} layout="fill"/>
								<figcaption></figcaption>
						</a>
						
					</div>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
}

export default Banner
