import Carousel from 'react-bootstrap/Carousel';

function DarkVariantExample() {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          // src="https://source.unsplash.com/1400x400/?movie Poster" class="d-block w-100"
          src="https://th.bing.com/th/id/R.9ce920118f16e27717829821d10321e3?rik=9kMjFZqJGYdaUg&riu=http%3a%2f%2fanniehaydesign.weebly.com%2fuploads%2f9%2f5%2f4%2f6%2f95469676%2flandscape-poster-3_orig.jpg&ehk=LZzIZURLnfIgbZWCYaPnqLJnGGs2tu1U0VXEsI%2b5%2flU%3d&risl=&pid=ImgRaw&r=0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{height:"600px"}}
          className="d-block w-100 h-50"
          src="https://i.pinimg.com/originals/96/c4/cf/96c4cfec3cee3aacf55c297e6b8a9893.png" class="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"

          src="https://th.bing.com/th/id/R.675751346f210493cf564e8a70564ef7?rik=Sx0FJKh0EDkKKQ&riu=http%3a%2f%2fwww.m2ksys.com%2fextimages%2f2x2_Movie_Poster4.jpg&ehk=dJpT2jaTkBku%2b5KF2GC%2fnFF799Ur4bXQjrWjdWE5G7E%3d&risl=&pid=ImgRaw&r=0" class="d-block w-100"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;

