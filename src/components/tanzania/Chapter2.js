import React from 'react'
import UmVideo from './UmVideo'
import Diagram from './Diagram'
import School from './School'
import UmCarosel from './UmCarosel'
import UmImage from './UmImage'

// videos & images
import meetingMaasai from '../../images/tanzaniaVideos/meetingMaasai.mov'
import waterBuilders from '../../images/tanzaniaImages/waterBuilders.png'
import siteAnalysis from '../../images/tanzaniaImages/siteAnalysis.png'
import chiefMeet from '../../images/tanzaniaImages/chiefMeet.png'
import Concrete from '../../images/tanzaniaImages/Concrete.png'
import highfive from '../../images/tanzaniaImages/highfive.png'
import chiefDrawing from '../../images/tanzaniaImages/chiefDrawing.png'
import projectOverview from '../../images/tanzaniaImages/projectOverview.png'
import findings from '../../images/tanzaniaImages/findings.png'
import interview from '../../images/tanzaniaImages/interview.png'
import whyConcrete from '../../images/tanzaniaImages/whyConcrete.png'
import chiefDrawing2 from '../../images/tanzaniaImages/chiefDrawing2.png'
import elebereki from '../../images/tanzaniaVideos/elebereki.mov'


//carousel 
import masaiBomba from '../../images/tanzaniaImages/masaiBomba.png'
import bombaDrawing from '../../images/tanzaniaImages/bombaDrawing.png'
import bombaKitchen from '../../images/tanzaniaImages/bombaKitchen.png'
import bomaWindow from '../../images/tanzaniaImages/bomaWindow.png'
import bomaPartition from '../../images/tanzaniaImages/bomaPartition.png'
import bomaRoad from '../../images/tanzaniaImages/bomaRoad.png'
import bomaBedroom from '../../images/tanzaniaImages/bomaBedroom.png'

//carosel 2
import modernBomaHouse from '../../images/tanzaniaImages/modernBomaHouse.png'
import modernBomaPlan from '../../images/tanzaniaImages/modernBomaPlan.png'
import modernBomaDoor from '../../images/tanzaniaImages/modernBomaDoor.png'
import modernBomaRoof from '../../images/tanzaniaImages/modernBomaRoof.png'
import modernBomaWindow from '../../images/tanzaniaImages/modernBomaWindow.png'
import modernBomaSpace from '../../images/tanzaniaImages/modernBomaSpace.png'
import modernBomaPanels from '../../images/tanzaniaImages/modernBomaPanels.png'

function Chapter2() {

  const bomaCarosel = [
    {
      url: masaiBomba,
      id: 1,
      text: 'In Maasai culture, the traditional construction of bomas is carried out by the women, while the men focus on activities such as herding livestock and protecting the community. The process begins with women gathering the necessary building materials, which typically include branches, grass, and cow dung. They are skilled in selecting suitable branches and interweaving them to create the framework of the boma. Using their hands, the women then mix mud, grass, and cow dung to form a plaster-like substance, which is applied to the framework to construct the walls of the boma. After completing the walls, the women thatch the roof using long grass or palm leaves, employing a specific technique to ensure durability and protection from the elements. Inside the boma, women also arrange the interior space, designating specific areas for sleeping, cooking, and other daily activities. Additionally, women play an active role in maintaining and repairing the boma, regularly reapplying the mud and cow dung plaster to keep the walls in good condition and rethatching the roof when needed. The expertise of Maasai women in building these traditional structures showcases their skills and knowledge passed down through generations, emphasizing the significance of womens contributions within Maasai society.',
    },
    {
      url: bombaDrawing,
      id: 2,
      text: 'none',
    },
    {
      url: bombaKitchen,
      id: 3,
      text: 'The cooking area in a Maasai manyatta is one of the most important areas. Having a self contained kitchen space within the boma has been integrated in Maasai culture as long as time. The heat excess that is created from the cooking is used to warm the boma during the colder months. The typical grass roof allows for the heat to be absorbed.',
    },
    {
      url: bomaWindow,
      id: 4,
      text: 'none',
    },
    {
      url: bomaPartition,
      id: 5,
      text: 'none',
    },
    {
      url: bomaRoad,
      id: 6,
      text: 'The roof consists of wooden planks framed facing an apex. These wooden planks act as structural members for the chosen roof cover material. Typically the Maasai use grass, hay and roots to create a “thatched” roof. This doubled up as a breathable membrane that allowed for the smoke to escape/ be absorbed when they cook. Due to climate change and the desertification of the land in Oldonyasambu. There is a severe lack of grass available for creating roof membranes. Instead, the Maasai now buy plastic tarpaulin to cover the roof structure. When the woman cooks it is difficult to breathe because of the carbon monoxide build-up in the space. This is a major problem with the manyatta.',
    },
    {
      url: bomaBedroom,
      id: 7,
      text: 'none',
    }

  ]

  const modernBoma = [
    {
      url: modernBomaHouse,
      id: 1,
      text: 'In recent years, the Maasai community has embraced a new era of development and innovation, culminating in the creation of the modern Maasai boma. This unique architectural transformation seamlessly merges traditional Maasai elements with contemporary design, redefining the very essence of their living spaces. The modern boma showcases a remarkable array of advancements that cater to the evolving needs of the community while preserving their cultural identity. From partitioned walls inspired by Western architecture to personalized interior features and eco-friendly technology, the new modern Maasai boma stands as a testament to the Maasai peoples ability to adapt to a changing world while cherishing their timeless traditions. In this exploration, we delve into the remarkable facets that make the modern Maasai boma a fascinating and harmonious fusion of old and new.',
    },
    {
      url: modernBomaPlan,
      id: 2,
      text: 'none',
    },
    {
      url: modernBomaDoor,
      id: 3,
      text: 'One of the most notable upgrades in the modern Maasai boma is the replacement of traditional grass and plastic roofs with durable corrugated iron roofs. These roofs offer enhanced protection from the elements and are more resilient, ensuring the longevity of the bomas structures.',
    },
    {
      url: modernBomaRoof,
      id: 4,
      text: 'none',
    },
    {
      url: modernBomaWindow,
      id: 5,
      text: 'The new boma design also sees a significant improvement in the size of window openings compared to the original bomas small openings. This change allows for better ventilation and increased natural light, creating a more comfortable and inviting living environment for the residents.',
    },
    {
      url: modernBomaSpace,
      id: 6,
      text: 'none',
    },
    {
      url: modernBomaPanels,
      id: 7,
      text: 'In line with embracing modern technology, the interior of the boma now boasts plug sockets and lighting outlets. These essential amenities are powered by solar panels installed on the roof, harnessing the suns energy to provide electricity. This advancement not only improves the quality of life for the Maasai community but also contributes to sustainable practices, reducing their reliance on non-renewable energy sources.',
    }
  ]


  return (
    <>
      <section className="sections">
        <UmVideo content={meetingMaasai} />
      </section>
      <section className="sections">
        <Diagram content={findings} />
      </section>
      <section className="sections">
        <UmImage content={siteAnalysis}  />
      </section>
      <section className="sections">
        <UmImage content={waterBuilders} />
      </section>
      <section className="sections">
        <UmImage content={chiefMeet} />
      </section>
      <section className="sections">
        <School />
      </section>
      <section className="sections">
        <Diagram content={interview} />
      </section>
      <section className="sections">
        <UmImage content={Concrete} />
      </section>
      <section className="sections">
        <Diagram content={whyConcrete} />
      </section>
      <section className="sections">
        <UmImage content={highfive} />
      </section>
      <section className="sections">
        <UmVideo content={elebereki} />
      </section>
      <section className="sections">
        <Diagram content={chiefDrawing2} />
      </section>
      <section className="sections">
        <UmImage content={chiefDrawing} />
      </section>
      <section className="sections">
        <UmCarosel content={bomaCarosel}/>
      </section>
      <section className="sections">
        <UmCarosel content={modernBoma} />
      </section>
      <section className="sections">
        <Diagram content={projectOverview} />
      </section>
    </>
  )
}
export default Chapter2
