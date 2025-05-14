import React from 'react'

function Index() {
  return (

<>
 {/* <section> */}
    {/* <div className="container-xxl position-relative p-0"> */}
      <div className="container-xxl py-5 bg-dark hero-index-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Your Blood Can Be Someone’s 
                <br />
                Lifeline
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                The average adult has about 5 liters (1.3 gallons) of blood, which accounts for about 7-8% of their body weight.
              </p>
              <Link
                to="donorreg"
                className="btn btn-danger py-sm-3 px-sm-5 me-3 animated slideInLeft"
                >
                Donate Blood Today
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src="/assets/images/bloodhome.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    {/* </div> */}
    {/* </section> */}
</>
)
}
   

export default Index