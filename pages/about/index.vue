<script setup lang="ts">
import { HyperlinkTarget } from '~/enums';
</script>

<template>
  <Page title="About">
    <Paragraph>
      Hello there! 👋

      <br><br>

      I'm Stanko, a full-stack software developer with a love for making cool stuff on the internet.

      My coding adventure started back in high school. Picture this: playing with Lego mindstorms and Arduino gadgets, and suddenly, I saw lines of code doing magical things. It blew my mind and sparked my interest in programming.

      I taught myself the ropes by reading online articles and watching YouTube videos. Python became my playground, and I started creating small programs and games. Living in a small town without a big community of developers was a bit tricky, but I kept at it.

      <br><br>

      Next stop: the <Hyperlink to="https://fpmoz.sum.ba/" :target="HyperlinkTarget.BLANK">Faculty of Science and Education</Hyperlink> at the University of Mostar. From 2018 to 2021, I studied Computer Science and met some fantastic people. We run a student group called "<Hyperlink to="https://switch.sum.ba/" :target="HyperlinkTarget.BLANK">Switch</Hyperlink>" and did cool things like organizing events and participating in hackathons.

      We've organized meetups, code challenges, workshops and built a lot projects. We've also participated in programs like "Huawei Seeds for the Future", "Microsoft NetWork" conference, BEST hackathon and more. We organized open days of computer science studies, Code Challange hackathon, we've build websites for the study of computer science, the Student council of the University of Mostar and more.

      <br><br>

      <img src="/switch.jpeg">

      <br>

      I wore different hats, from teaching programming basics to being the head of the Student Council at the Faculty of Science and Education. My biggest goal there was to support as many projects from other students as possible. We've made sure that students at our faculty have many benefits through their studies.
      Winning a Smart Parking competition and presenting my thesis on <Hyperlink to="https://www.youtube.com/watch?v=DjQnRLbW3YI&t=8s" :target="HyperlinkTarget.BLANK"> "Developing Chess AI Systems"</Hyperlink> at BHFF 3MT were big moments. Along the way, I got into using Laravel and Vue.js, tools that I still use today.

      <br><br>

      <img src="/smart-campus.jpeg">

      <br>

      In the summer of 2021, I landed an internship at <Hyperlink to="https://www.qsd.ba/" :target="HyperlinkTarget.BLANK">QSD</Hyperlink>, where I worked on an online library project.The project was also built with Laravel and VueJs and we had a great support from amazing mentors. It was a blast, and I learned a ton about startups, business, and making cool things on the web.

      <br><br>

      Come November 2021, I joined <Hyperlink to="https://www.zendev.se/" :target="HyperlinkTarget.BLANK">ZenDev</Hyperlink> and worked on projects like <Hyperlink to="https://robinize.com/" :target="HyperlinkTarget.BLANK">Robinize</Hyperlink>, an AI tool for content writers. It was a game-changer, and I learned a lot from the awesome people at ZenDev. That was my first real world project and represents a stepping stone for me.
      Also I worked on a project called "Open Hours" where we managed a database with information for over a milion of places in the world. The project was built with Python and MongoDB.

      <br><br>

      <img src="/zendev-team-building.jpeg">

      <br>

      Now, I'm working as full-stack developer for <Hyperlink to="https://www.returnless.com/" :target="HyperlinkTarget.BLANK">Returnless</Hyperlink>, a Dutch company making returns hassle-free. Returnless is an all-in-one Return Platform to handle returns faster, lower costs and prevent future returns. Here, I'm serving a role of a full-stack developer, mainly working with Laravel and VueJS.

      <br><br>

      In my free time, I'm all about sports (huge fan of HNK Hajduk Split!), running, music, and exploring. I've loved reading and writing since I was a kid, so I spend some of my free time reading literature and creating technical content.
    </Paragraph>
  </Page>
</template>
