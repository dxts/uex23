import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('context-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class ContextPage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Context',
        body: [
          `Our project takes an innovative approach to urban stray dog welfare by integrating dog kennels and daycare centres within university campuses.
          This humane solution not only provides shelter and care for strays but also addresses community safety and health concerns.
          The expansive open spaces of university grounds serve as an ideal setting for this initiative,
          offering a dual benefit: enhancing the welfare of stray dogs and enriching the campus experience for students.`,
          `Students, especially those living in accommodation where pets are not allowed, get the chance to interact with and care for the dogs,
          filling the void for those missing their pets back home. This engagement is not just about providing a sanctuary for strays but also about fostering
          a compassionate, responsible, and socially engaged university community. The benefits are manifold, including lowered stress levels
          and better mental health among students and staff, thanks to the therapeutic presence of dogs.`,
          `This concept could be adapted to other public spaces like libraries and parks, or to municipal buildings like police stations,
          suggesting a versatile and scalable model for urban stray dog care. Our project underscores the potential of thoughtful design
          to address social issues, promoting a more empathetic and inclusive approach to community and urban planning.`,
        ],
      }}
      .imageGrid=${[
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209515415982710844/dxts._stray_dog_roaming_the_streets_near_a_university_grounds_l_158c0d4d-94e3-4661-9137-14a3085f386c.png?ex=65e73402&is=65d4bf02&hm=9c0a1b588fd2c500334bc22ffa205d0090f203f7157546a00cf64238f05cdffb&=&format=webp&quality=lossless',
            alt: '/mj stray dog roaming the streets near a university grounds, looking for food near waste bins, dog is dirty and sad --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209515321430380575/dxts._hungry_stray_dog_aimlessly_wandering_the_city_eea49a7d-ea33-46b4-b2cd-07b54448c20c.png?ex=65e733ec&is=65d4beec&hm=9f3e1172a02839c8825a13893b8705e545079d65a2d288476d79256055122e20&=&format=webp&quality=lossless',
            alt: '/mj hungry stray dog aimlessly wandering the city --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209515381195022456/dxts._stray_dog_looking_messy_and_malnourished_wandering_the_st_048ee4d1-f6ea-47da-9369-7e38461f0989.png?ex=65e733fa&is=65d4befa&hm=0f2161348dbacff21ebcb93d9a15c005fa0b13b2fd0ec8df9558f083083ded3b&=&format=webp&quality=lossless',
            alt: '/mj stray dog looking messy and malnourished wandering the streets near a school --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209516019626807346/dxts._stray_dog_looking_at_dog_shelter_across_the_street_juxtap_deff9397-1e41-40eb-8e45-18fa7405dd81.png?ex=65e73492&is=65d4bf92&hm=f2afbfc59d204788d3dc38d329924230141576fe72d5b82f58194584f17c7a39&=&format=webp&quality=lossless',
            alt: '/mj stray dog looking at dog shelter across the street, juxtaposition of dirty hungry stray dog vs pet dog at daycare --s 250',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209517352375291945/dxts._volunteers_helping_stray_dogs_with_bath_and_food_vet_perf_02b7b3ea-23bb-4f2f-900f-b46dab7406e8.png?ex=65e735d0&is=65d4c0d0&hm=1e91e45982c8d05e0279232f251dd33236f17d2430bade05e8e12de62f8fd22a&=&format=webp&quality=lossless',
            alt: '/mj volunteers helping stray dogs, with bath and food, vet performs checkup on dog in the background --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209517445396693072/dxts._university_students_help_wash_stray_dogs_on_the_weekend_a_175496c1-6f32-4a6f-a2a2-9ba39212627b.png?ex=65e735e6&is=65d4c0e6&hm=adb7e6278338c4ed65f40e13a4d76ced7fd2d645cc8d537e5d30a1a3e4f95c87&=&format=webp&quality=lossless',
            alt: '/mj university students help wash stray dogs on the weekend as a campus event, some students in the background are feeding other dogs. photographic style',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209517506910494780/dxts._university_students_helping_clean_and_feed_stray_dogs_on__0ad2ad91-d1c7-4333-96a1-2af5d4d9754d.png?ex=65e735f5&is=65d4c0f5&hm=a1d4db773bfe7806164c0951af4bfdfb1b82e1e3c16624a2ec10210be2521185&=&format=webp&quality=lossless',
            alt: '/mj university students helping clean and feed stray dogs on the weekend as a campus event, other students are in the background playing with dogs too. clear morning. photographic style --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209518772139073536/dxts._volunteer_introducing_new_stray_to_other_dogs_in_the_shel_aaac0825-fc66-4080-b8de-d9deca36563c.png?ex=65e73723&is=65d4c223&hm=688b6fc0d204756d5bb941953f19831ea82b5c48fa05251af6e9042321e3c706&=&format=webp&quality=lossless',
            alt: '/mj volunteer introducing new stray to other dogs in the shelter. --s 250',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209518574415253585/dxts._None_6a66f3f0-a333-4743-89e3-5ccb4d708c98.png?ex=65e736f3&is=65d4c1f3&hm=8befd04235e79130c4020964786b8960e9e28d351c4dfef46401d79f9439e6a9&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/nb5jPDqNoXk https://s.mj.run/w8IAnT0G4NQ https://s.mj.run/U-2xfDSvGgQ --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206413462553501696/dxts._None_457c030e-eb47-48b5-8083-6124d06d06ec.png?ex=65e52597&is=65d2b097&hm=cc9c511dea791c69595d25822b86489646777e575baab92583e2d9d9c835e436&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/nb5jPDqNoXk https://s.mj.run/_ikrWN2Y0_Y https://s.mj.run/w73T_f5i8ME https://s.mj.run/U-2xfDSvGgQ --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209518437446197278/dxts._doggy_day_care_being_run_by_volunteer_students_3_dogs_in__efa4ab9e-0fcc-4ff1-a743-3021323f2386.png?ex=65e736d3&is=65d4c1d3&hm=b8883a0a0b2419c96ab01a016976f36ad56a0388a2f0a672e0fb29c4c58ea29c&=&format=webp&quality=lossless',
            alt: '/mj doggy day care being run by volunteer students, 3 dogs in the enclosed kennel, located on the grass on university grounds, building in the background, clear sunny sky. photographic style --s 150',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206429453085843517/dxts._doggy_day_care_being_run_by_volunteer_students_3_dogs_in__b167e271-bb6a-4d88-a5c1-05a519ba90e7.png?ex=65e5347b&is=65d2bf7b&hm=695ed2e10bccac5c0f504c05221e9b017396c445f7c69fdf5de55310284ba89b&=&format=webp&quality=lossless',
            alt: '/mj doggy day care being run by volunteer students, 3 dogs in the enclosed space made from wood and in the shade of a tree, located on the grass on university grounds, building in the background, clear sunny sky. photographic style with third person prespective --s 150',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206414080953556992/dxts._dog_kennels_on_university_grounds_few_dogs_sitting_outsid_236e5c86-ce39-430c-b6e7-6bd7a6ad79ce.png?ex=65e5262a&is=65d2b12a&hm=1cdcab559fa8710c87f548276fb1fefad1f9b1bef8b0729c28506d53c1045930&=&format=webp&quality=lossless',
            alt: '/mj dog kennels on university grounds, few dogs sitting outside the kennel with 2 students petting them. third person perspective, photographic style. --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209520707805909082/dxts._wooden_dog_kennels_on_university_grounds_couple_of_dogs_i_b0ac75f6-5a2e-4602-80a4-50265d5e30b5.png?ex=65e738f0&is=65d4c3f0&hm=acf43719a762769557fb5f00b338acd7726a13397c2d32ea47bb21047bc5fb0e&=&format=webp&quality=lossless',
            alt: '/mj wooden dog kennels on university grounds, couple of dogs in the kennel with 2 students sitting outside petting them. third person perspective, photographic style. --s 250 --v 5.2',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206414930388193361/dxts._wooden_dog_kennels_on_university_grounds_few_dogs_sitting_7b725a7d-7f29-4bba-b86e-5a90cf146ea6.png?ex=65e526f5&is=65d2b1f5&hm=662131b855853e121ddea8554b75657dbcd6ecd1aeb284f3eae59f06f03edfc5&=&format=webp&quality=lossless',
            alt: '/mj wooden dog kennels on university grounds, few dogs sitting outside the kennel. 2 students having their lunch break, petting the dogs. third person perspective, photographic style. --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206414861840687124/dxts._wooden_dog_kennels_on_university_grounds_few_dogs_sitting_1fb1770f-afa3-4a0b-b5ec-881bdb3471eb.png?ex=65e526e5&is=65d2b1e5&hm=82e2bd95fdf913db3f532c5cd36c4c874de525fea46eda0e839e8e01ffd071f0&=&format=webp&quality=lossless',
            alt: '/mj wooden dog kennels on university grounds, few dogs sitting outside the kennel. 2 students having their lunch break, petting the dogs. third person perspective, photographic style. --s 250',
          },
        ],
      ]}
    ></project-page>`;
  }
}
