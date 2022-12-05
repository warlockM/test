import Footer from './components/footer';
import Navbar from './components/navbar';
import Card from './components/card';

export default function Services() {
    return (
      <div>
        <Navbar />
        <div class="flex mx-auto place-content-center m-20">
          <Card          
            heading="Child Psychology"
            description="For children under the age of 18"
            image="/laugh.jpg"
          />
          <Card
            heading="Family Therapy"
            description="For children and their parents"
            image="/laugh.jpg"
          />
        </div>
        <div class="flex mx-auto place-content-center m-20">
          <Card
            heading="Wellness Sessions"
            description="For general awareness and comunity building"
            image="/laugh.jpg"
          />
          <Card
            heading="Coping Strengthening"
            description="To create a more positive and healthy mindset"
            image="/laugh.jpg"
          />
        </div>
        <div class="flex mx-auto place-content-center m-20">
          <Card
            heading="Parenting Workshops"
            description="For parents to learn and understand their children better"
            image="/laugh.jpg"
          />
          <Card
            heading="Career Guidance"
            description="To unlock full potential and help children find their passion"
            image="/laugh.jpg"
          />
        </div>
        <div class="flex mx-auto place-content-center m-20">
          <Card
            heading="Special care"
            description="For children with autism, ADHD, and other special needs"
            image="/laugh.jpg"
          />
          <Card
            heading="Deaddiction"
            description="For students who are addicted to mobile, games, and other media"
            image="/laugh.jpg"
          />
        </div>
        <Footer />
      </div>
    );
}