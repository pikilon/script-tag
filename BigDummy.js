import { mountTag } from "./mount-tag.js";

const MyButton = (tag) => {
  const { innerHTML, onclick } = tag;
  const myButton = document.createElement("button");
  myButton.innerHTML = innerHTML;
  myButton.onclick = () => {
    console.log(`
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur officia temporibus inventore dicta perspiciatis optio quasi ut eveniet porro consectetur eum at, nemo, suscipit odio delectus id error quo beatae.
    Nihil obcaecati facilis natus provident laborum magnam quibusdam, sapiente odit deleniti. Quae numquam quia dolorum architecto est hic cum deserunt placeat amet ipsum maxime voluptatibus accusantium repudiandae, error eos facere.
    Voluptate porro vitae, delectus nulla vel neque assumenda, ex illum hic quos magni qui enim laboriosam ipsum suscipit eum fuga consectetur necessitatibus. Repellendus quas sequi officia corporis at quam iure.
    Fugit praesentium unde odio in ab consequatur minus nisi repellat harum rem aliquid quibusdam cum sequi, maxime, nemo, eligendi dolorum. Dignissimos sunt modi accusamus? Nam libero mollitia nostrum quae ex.
    Architecto consequatur magni obcaecati ducimus iste quaerat, rerum totam qui quidem, modi repellat fuga doloremque molestias omnis quasi libero! Nesciunt cupiditate, exercitationem perferendis corporis excepturi voluptatum delectus. Laborum, cumque pariatur.
    Quidem suscipit adipisci fugit praesentium veniam modi necessitatibus iste id quod dicta incidunt consequuntur dolor nulla quos, eius, corrupti, nemo rerum consequatur natus? Sunt, alias eaque debitis deserunt dolor natus.
    Minima iure animi esse, officia adipisci hic odio, saepe culpa dolorum laboriosam et. Eveniet consequatur possimus impedit dolorem beatae neque soluta pariatur rerum id at, eligendi dolor quos dolore corporis.
    Itaque quibusdam placeat pariatur ut doloribus non, mollitia obcaecati iure in tempora ab, error architecto deleniti distinctio debitis fugiat minima odit sed blanditiis reiciendis odio neque. Ad voluptatibus sunt aliquam.
    Quia porro excepturi harum culpa facilis numquam molestias et cupiditate voluptatibus saepe minima, neque libero pariatur officiis? Quidem ipsa minima maxime velit, magni dolorem illum, vitae mollitia repellendus architecto repellat.
    Quidem odit harum laborum quae repudiandae aliquam autem corrupti facilis eligendi voluptatem veritatis, sed asperiores officia nulla! Reprehenderit, excepturi atque magnam cumque laudantium illo hic non! Magni eligendi doloremque cum!
    Ullam fugiat, sed quasi nihil deserunt voluptatum vel quidem saepe odio distinctio, blanditiis, soluta repudiandae! Odit est deserunt obcaecati autem assumenda adipisci, ab deleniti beatae quasi voluptate, incidunt perspiciatis ut?
    Iste incidunt assumenda officiis ducimus labore culpa cupiditate. Reiciendis, suscipit laboriosam sunt rerum veritatis cupiditate aliquid mollitia impedit. Temporibus ducimus nobis magni ratione ipsa est quo veniam amet natus reiciendis?
    Obcaecati iure sit culpa, incidunt nemo provident sequi dolorem perferendis quia placeat nostrum id at veniam cum, dolores praesentium est hic ipsa odit labore asperiores adipisci quaerat vel? Perferendis, eum!
    Voluptate nulla minus inventore repudiandae autem et exercitationem animi, ab maxime odio quas nihil reprehenderit magni accusamus velit non similique voluptas ipsum tempora. Odit placeat doloribus necessitatibus ab. Quibusdam, ea?
    Consectetur facilis officiis sit eligendi dolores. Numquam, illo asperiores? Totam cupiditate fugit doloribus non, dolore consequatur, animi officia explicabo labore perferendis temporibus assumenda iure magnam! Quaerat asperiores blanditiis ex tempora!
    Laboriosam asperiores laborum reprehenderit eos ex officia tenetur similique fugit ut veritatis amet voluptas sunt eius, expedita, nisi provident corrupti in reiciendis quam natus debitis ullam. Corporis ad ex possimus.
    Neque adipisci hic autem quisquam non deleniti quia soluta error quibusdam magni. Id dolore eos hic doloribus at sequi necessitatibus placeat repellendus. Ut consectetur facilis beatae ducimus placeat impedit perspiciatis?
    Velit rem amet fugit unde repellendus aut, reiciendis provident culpa ex debitis repudiandae. Facilis, tempore. Dolores mollitia corrupti ipsam voluptatum nemo provident assumenda temporibus, in inventore magni, cupiditate earum odit.
    Similique earum fugit id illo alias consectetur nulla accusantium soluta animi voluptatibus. Nihil odit modi possimus architecto explicabo quos saepe tenetur! Nisi odit ex neque dolores nobis debitis dolorem natus.
    Tempore ea ipsum odit repellendus, exercitationem esse mollitia laboriosam nobis excepturi veritatis quisquam tempora modi aspernatur, atque sint blanditiis animi consequuntur impedit! Sequi excepturi rerum possimus magnam obcaecati officiis atque.
    `);
    onclick();
  };

  return myButton;
};

mountTag(MyButton)
