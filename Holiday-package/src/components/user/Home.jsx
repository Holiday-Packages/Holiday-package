import { Link } from "react-router-dom";
import { Fragment} from "react";

export default function Home(){
    return(
<>
  <div className="container-xxl bg-white ">
    {/* Hero Start */}
    <section>
    <div className="container-xxl position-relative p-0">
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
    </div>
    </section>
    {/*Hero End */}
    {/* Service Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-user-md text-danger mb-4" style={{fontSize:48}} />
                <h5>Experienced Doctores</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className=" text-danger mb-4" />
                <img src="/assets/images/icon.png" style={{height:70}}/>
                <h5>Quality Blood</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cart-plus text-danger mb-4" />
                <h5>Online Order</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-headset text-danger mb-4" />
                <h5>24/7 Service</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Service End */}
    {/* About Start */}
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  src="/assets/images/g1.jpg"
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="/assets/images/g2.jpg"
                  style={{height:180,
                marginTop: "25%" }}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src="/assets/images/g3.jpg"
                  style={{height:180}}
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src="/assets/images/4.jpg"
                  style={{height:220}}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="section-title ff-secondary text-start text-danger fw-normal">
              Our Moments
          
            <i className="fa fa-heartbeat" style={{ fontSize: 48, color: "red" }} />
            </h1>
          
            <p className="mb-4">
            Participating in the blood donation event was an incredible experience that brought our team closer together while making a meaningful impact. From the moment we arrived, the atmosphere was filled with a sense of purpose and camaraderie.
            </p>
            <p className="mb-4">
            Everyone was eager and supportive, cheering each other on and ensuring that no one felt anxious or alone.<br/>
            Witnessing the generosity of colleagues and other donors was truly inspiring. Each contribution was a step towards saving lives.<br/>
            The informative sessions held by healthcare professionals helped us understand the importance and process of blood donation, reinforcing the significance of our contributions.<br/>
            After donating, we shared light refreshments and stories, celebrating our collective effort to give back to the community.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    15
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-primary px-3">
                  <h1
                    className="flex-shrink-0 display-5 text-primary mb-0"
                    data-toggle="counter-up"
                  >
                    50
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Hospitals</h6>
                  </div>
                </div>
              </div>
            </div>
            <Link className="btn btn-primary py-3 px-5 mt-2" to="../Bloodinfo">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </div>
    {/* About End */}
    {/* Reservation Start */}

    {/* Team Start */}
    <div className="container-xxl pt-5 pb-3">
      <div className="container">
        <div className="text-center">
          <h1 className="mb-5">Top Partners</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="team-item text-center rounded overflow-hidden position-relative">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="/assets/images/capitol.jpg" alt="Hospital" style={{height:210}} />
              </div>
              <h5 className="mb-0">Capitol</h5>
              <small>Jalandhar</small>
              <div className="d-flex justify-content-center mt-3">
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item text-center rounded overflow-hidden position-relative">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="/assets/images/SHRIMANN-HOSPITAL.png" alt="Hospital" style={{height:210}} />
              </div>
              <h5 className="mb-0">Shrimann</h5>
              <small>Jalandhar</small>
              <div className="d-flex justify-content-center mt-3">
                
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item text-center rounded overflow-hidden position-relative">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="/assets/images/NHS.jpeg" alt="Team Member" style={{height:210}}/>
              </div>
              <h5 className="mb-0">NHS</h5>
              <small>Designation</small>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="team-item text-center rounded overflow-hidden position-relative">
              <div className="rounded-circle overflow-hidden m-4">
                <img className="img-fluid" src="/assets/images/tagore_hospital.jpg" alt="Team Member" style={{height:210}} />
              </div>
                <h5 className="mb-0">Tagore</h5>
              <small>Designation</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Team End */}
  
    {/* Testimonial Start */}
    <div className="container wow fadeInUp" data-wow-delay="0.1s">
      <div className="container">
        <div className="text-center">
          <h5 className=" ff-secondary text-center text-danger fw-normal">Testimonial</h5>
          <h1 className="mb-5">Our Clients Say!!!</h1>
        </div>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-danger mb-3"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/images/testimonial-1.jpg" style={{ width: 50, height: 50 }} />
                <div className="ps-3">
                  <h5 className="mb-1">Anjali</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="testimonial-item bg-transparent border rounded p-4">
                      <i className="fa fa-quote-left fa-2x text-danger mb-3"></i>
                      <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                    <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/images/testimonial-2.jpg" style={{ width: 50, height: 50 }} />
                <div className="ps-3">
                  <h5 className="mb-1">Jack</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="testimonial-item bg-transparent border rounded p-4">
              <i className="fa fa-quote-left fa-2x text-danger mb-3"></i>
              <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded-circle" src="/assets/images/testimonial-3.jpg" style={{ width: 50, height: 50 }} />
                <div className="ps-3">
                  <h5 className="mb-1">Hope</h5>
                  <small>Profession</small>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  </div>
</>
)
}