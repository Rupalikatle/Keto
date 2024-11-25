import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";

function Blog() {
  return (
    <div className="backimg">
     <h1 className='text-center'>Blog</h1>

    <MDBContainer fluid className="my-5 text-center">
      <MDBRow>
      <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://themewagon.github.io/keto/images/blog2.jpg"
                fluid
                className="w-100"
              />
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>

            </MDBRipple>
            <MDBCardBody>

              <h3 className="card-title">Bed Room</h3>
              <h2 style={{color:'orangered'}}>The standard chunk</h2>
              <h5 className="mb-3">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://themewagon.github.io/keto/images/blog1.jpg"
                fluid
                className="w-100"
              />
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>

            </MDBRipple>
            <MDBCardBody>

              <h3 className="card-title ">Bed Room</h3>
              <h2 style={{color:'orangered'}}>The standard chunk</h2>
              <h5 className="mb-3">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="6" lg="4" className="mb-4">
          <MDBCard>
            <MDBRipple
              rippleColor="light"
              rippleTag="div"
              className="bg-image rounded hover-zoom"
            >
              <MDBCardImage
                src="https://themewagon.github.io/keto/images/blog3.jpg"
                fluid
                className="w-100"
              />
              <div className="hover-overlay">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </div>

            </MDBRipple>
            <MDBCardBody>

              <h3 className="card-title ">Bed Room</h3>
              <h2 style={{color:'orangered'}}>The standard chunk</h2>
              <h5 className="mb-3 ">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you are</h5>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>


      </MDBRow>
    </MDBContainer>
    </div>
  );
}

export default Blog;