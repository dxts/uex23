import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

import '../project-page.js';

@customElement('style-page')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class StylePage extends LitElement {
  render() {
    return html`<project-page
      .text=${{
        title: 'Style',
        body: [
          `During this project on designing through style, we reimagined the neck brace, traditionally a purely functional medical device,
          into a fashionable accessory through the innovation of 3D printing.`,
          `Our designs, freely detachable personalized neck braces, challenge conventional
          views by blending fashion with function, transforming a clinical apparatus into a style statement.`,
          `This approach not only shifts design paradigms but also fosters a more inclusive society where medical needs
          meet personal expression. Targeting fashion-forward individuals in need of neck support,
          our design offers a dignified solution that combines well-being with contemporary style, addressing the desires
          of a modern, urban demographic.`,
          `This project exemplifies a step in design thinking, erasing the stigma attached to medical aids
          and empowering users to embrace their needs without compromising on style.`,
        ],
      }}
      .imageGrid=${[
        [
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209466339882958900/file-SpigdjjuetkppYXz10EGYEgH.png?ex=65e7064e&is=65d4914e&hm=f2febdf0d49c9b623e0c5d35330cd966f9453acf0f552ac5b1f0f5e00dd7b832&=&format=webp&quality=lossless',
            alt: '/de Photo of an Asian female wearing a highly restrictive cervical collar, crafted through 3D printing for a sculpted, tight fit. The brace extends from her upper chest to the back of her head, ensuring full immobilization of the neck. It is designed with premium composite materials, giving it a sophisticated appearance. The structure of the brace is inspired by organic forms, with flowing lines and natural shapes that enhance its aesthetic appeal while providing the necessary support.',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170029913332514967/file-8I148ECP9ZEiW2NprtfsIfxk.png?ex=65e1fbc5&is=65cf86c5&hm=1ab474291507f94ee1fe756417508389a80d0311c972869f1bd66b932f1a56b3&=&format=webp&quality=lossless',
            alt: '/de Photo of an Asian female with an outdated white neck brace made of a non-ventilated, stiff material. The brace fits more restrictively around her neck, emphasizing its function over comfort. The design is simple and straightforward, without the modern ergonomic features like vented slots, resulting in a bulkier appearance that firmly holds the cervical spine.',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170029149595910215/file-MJNymb0p7mqOp6S2YDG2BB0Z.png?ex=65e1fb0f&is=65cf860f&hm=bba52104d00be59e3ef252675cb0d136146f9aca6522b96ef9fc689bac3f4325&=&format=webp&quality=lossless',
            alt: "/de Photo of an Asian female wearing a white cervical collar that is rigid, made from a synthetic material like plastic. The collar fits snugly around the neck with a contoured design featuring multiple vented slots for breathability. The collar extends up to just below the chin, supporting the head in a stable position. Its clinical appearance emphasizes its medical purpose while it's designed for optimal support and comfort.",
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170017263093555240/planet5298_more_simple_neck_brace_durable_b05ac9c6-96d2-4019-aa61-aca3e3ffa0b5.png?ex=65e1effd&is=65cf7afd&hm=14b8e4c9689c13e02fa29ed592260716f4f64c7aa30e33a4acc2b905f97d6ccd&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/qNu3VlvRHmw more simple neck brace durable --style raw --s 50',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1206294661770121246/dxts._neck_brace_is_an_accessory_for_fashion_week_bc5dc760-2311-4ba0-b907-c69af306aafb.png?ex=65e4b6f3&is=65d241f3&hm=214ad7950e0a10e878d0798a9cb2cecfb7fda3251f5370305d5599cc4058c76c&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/qNu3VlvRHmw neck brace is an accessory for fashion week --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170031005525086329/file-Z8stKDBFhKQeKd9925a1yHiS.png?ex=65e1fcc9&is=65cf87c9&hm=2501c166cf7a0574d44935f05d27d7505819e7cfbf93dcfa81887d951bad5421&=&format=webp&quality=lossless',
            alt: "/de Photo of an Asian female fitted with a custom-designed white neck brace. This brace, while lacking modern features such as ventilation, is customized to accommodate her neck's unique contours and posture. The material is solid and sturdy, offering a close, personalized fit that helps maintain proper neck alignment without the modern comfort features.",
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170002380255920188/file-9JZsq65rYsKEI1p8jAlguvnF.png?ex=655774a1&is=6544ffa1&hm=17816b9080836d1adebc5cd55e0cd6268811c4d0c803d3b7ab80ed847a211f80&=&format=webp&quality=lossless',
            alt: '/mj a person wearing a 3D printed neck brace, simple geometric construction --style raw ',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170017353187201054/planet5298_more_simple_neck_brace_design_by_bauhaus_a496e5ed-4aee-4ebc-844d-a9f64c760683.png?ex=65e1f012&is=65cf7b12&hm=4edd038cea6dded7ca5ecde0739ca7de83655641ea2cf3b0f6069b13c325185a&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/qNu3VlvRHmw more simple neck brace design by bauhaus',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170017229539135518/planet5298_more_simple_neck_brace_design_by_warhol_a3688d2a-077c-4de6-b1b2-a0c709a93f06.png?ex=65e1eff5&is=65cf7af5&hm=42e54cb06a6ce2c45159a0defa0f70871b8353870d23e80982098588fc73b018&=&format=webp&quality=lossless',
            alt: '/mj https://s.mj.run/qNu3VlvRHmw more simple neck brace design by warhol --style raw --s 50',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1206290255355846686/dxts._Photo_of_a_female_wearing_a_highly_personalized_cervical__f9595c42-1fdf-4706-a04b-bf6eff918bf3.png?ex=65e4b2d8&is=65d23dd8&hm=34d8af720cffc5da0f858ed251049eeaefcd225196a8036a4ac74c4a7c76b8b8&=&format=webp&quality=lossless',
            alt: '/mj Photo of a female wearing a highly personalized cervical collar that diverges, traditional medical appearance. The material has a sleek, modern, fabric, design is streamlined, maintaining support. 3d printed construction, organic sculpted look, rigid and restrictive, focus on joints/connections, kimoicore. --s 250',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170033207392075888/file-Vd02dk74WgkQ5zL5ZxCEnJMC.png?ex=65e1fed6&is=65cf89d6&hm=93b30073c2c93ad98595581ce5baecb9daed43d7db43172693caaa5762faba15&=&format=webp&quality=lossless',
            alt: '/de Photo of an Asian female wearing a highly personalized cervical collar that diverges from the traditional medical appearance. The material has a sleek, modern finish, possibly a composite or a stylish fabric, tailored to fit her neck and posture. The design is streamlined and fashionable, maintaining support while offering a visually appealing alternative to standard medical devices.',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170027550647529634/irishansenne_a_asian_person_wearing_a_3d_printed_neck_brace._It_b8e86310-1a8e-4119-af49-83addb3f4447.png?ex=65e1f992&is=65cf8492&hm=2269beaceab19fb6e198dcdc092362bca34856eeceef667c3b133254f068eb67&=&format=webp&quality=lossless',
            alt: '/mj a asian person wearing a 3d printed neck brace. It fits snugly on the neck. it is more like a necklace --style raw',
          },
        ],
        [
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170017446883758150/planet5298_a_person_wearing_a_3D_printed_neck_bracemake_designe_e2b2cec1-37ca-40c8-baf1-8d9d483b0b72.png?ex=65e1f029&is=65cf7b29&hm=18f99e80781e4e2c0221d8b57dbdf72cdf13aba435bdea3d2c5585682c3b86c7&=&format=webp&quality=lossless',
            alt: '/mj a person wearing a 3D printed neck bracemake designed in 50s by Givenchy --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170031802430259300/planet5298_a_asian_person_wearing_a_3d_printed_neck_brace._It_f_9486c1f0-dcd9-48bb-a26e-eb646cb3b5b4.png?ex=65e1fd87&is=65cf8887&hm=a8d78b140c1c5c6fa740555bce1effef13555f2543b316fbacd22a597c887467&=&format=webp&quality=lossless',
            alt: '/mj a asian person wearing a 3d printed neck brace. It fits snugly on the neck. it fits with the clothes --style raw',
          },
          {
            url: 'https://media.discordapp.net/attachments/1169212683267100692/1170033206947496048/file-A4nHcRA4f3YCLXIM0zwAq3Wd.png?ex=65e1fed6&is=65cf89d6&hm=6ac2c400aadd3fced64535992645b02912b835f60f4502767c478bee1baf35a7&=&format=webp&quality=lossless',
            alt: '/de Photo of an Asian female adorned with a contemporary and chic neck brace that has been customized to her neck. The brace forgoes the typical white medical look for a more avant-garde aesthetic, utilizing high-end materials that might be found in modern accessories. It fits her neck perfectly, providing necessary support with a touch of modern style.',
          },
          {
            url: 'https://media.discordapp.net/attachments/1180134288210018314/1209466546204708934/file-CksboCalr1MWLaSKeN9MsgYB.png?ex=65e7067f&is=65d4917f&hm=5c6f61d8a41015787a698cc9144d8dfa1c13e5413886eed9a221519ece40c03b&=&format=webp&quality=lossless',
            alt: '/de Create an image of a person wearing a 3D printed neck brace that reflects the sophistication and elegance of 1950s high fashion. The design incorporates sleek lines and a minimalist aesthetic, with a nod to the classic silhouettes and refined elegance characteristic of that era. The material has a subtle sheen, suggesting a blend of modern innovation with timeless style. The setting is reminiscent of a vintage fashion photoshoot, with soft, diffused lighting that highlights the unique blend of past elegance and future technology.',
          },
        ],
      ]}
    ></project-page>`;
  }
}
