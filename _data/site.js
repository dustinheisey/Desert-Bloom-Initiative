module.exports = {
  title: "Desert Bloom Initiative - Fighting Desertification",
  url: "https://desert-bloom.dustinheisey.com",
  description:
    "Desert Bloom Initiative is a committed organization dedicated to combating desertification and transforming barren lands into thriving ecosystems. Through research, community engagement, partnerships, and practical projects, we strive for a greener, more sustainable future. Join us in our fight against desertification.",
  navigation: {
    logo: {
      src: "./public/svg/logo",
      alt: "Desert Bloom Initiative",
    },
    header: {
      variant: "spaced",
      links: [
        {
          label: "About",
          url: "/about",
          subLinks: [
            {
              label: "Understanding Desertification",
              url: "/about/understanding-desertification",
            },
            {
              label: "Fighting Desertification",
              url: "/about/fighting-desertification",
            },
            { label: "Resources", url: "/about/resources" },
          ],
        },
        {
          label: "Our Work",
          url: "/our-work",
          subLinks: [
            { label: "Impact", url: "/our-work/impact" },
            { label: "Partnerships", url: "/our-work/partnerships" },
          ],
        },
        {
          label: "Get Involved",
          url: "/get-involved",
          subLinks: [{ label: "Volunteer", url: "/get-involved/volunteer" }],
        },
        { label: "Contact", url: "/contact" },
      ],
      action: { label: "Donate", url: "/donate" },
    },
    bottombar: {
      links: [
        { label: "Home", url: "/", icon: "home" },
        { label: "About", url: "/about", icon: "about" },
        { label: "Our Work", url: "/our-work", icon: "about" },
        { label: "Get Involved", url: "/get-involved", icon: "about" },
        { label: "Contact", url: "/contact", icon: "about" },
      ],
      fab: { label: "Donate", url: "/donate", icon: "donate" },
    },
    footer: {
      variant: "mission-bg",
      mission:
        "The Desert Bloom Initiative is dedicated to combating the global challenge of desertification. Our mission is to educate communities about the causes and consequences of desertification and to implement effective solutions for its prevention and reversal. We are committed to fostering sustainable land management practices, promoting biodiversity, and empowering communities to turn degrading lands into thriving ecosystems. Together, we can turn the tide on desertification and help our planet bloom again.",
      groups: [
        {
          title: "About",
          links: [
            { label: "About", url: "/about" },
            { label: "Our Work", url: "/our-work" },
            { label: "Impact", url: "/our-work/impact" },
            { label: "Partnerships", url: "/our-work/partnerships" },
            {
              label: "Understanding Desertification",
              url: "/about/understanding-desertification",
            },
            {
              label: "Fighting Desertification",
              url: "/about/fighting-desertification",
            },
            { label: "Resources", url: "/about/resources" },
          ],
        },
        {
          title: "Nonprofit",
          links: [
            { label: "Home", url: "/" },
            { label: "Get Involved", url: "/get-involved" },
            { label: "Volunteer", url: "/get-involved/Volunteer" },
            { label: "Contact", url: "/contact" },
            { label: "Donate", url: "/donate" },
          ],
        },
        {
          title: "Legal",
          links: [
            {
              label: "Privacy Policy",
              url: "https://www.termsfeed.com/live/d5271eb0-e06a-49f5-9021-99c0bb40389b",
            },
            {
              label: "Terms of Service",
              url: "https://www.termsfeed.com/live/dc519ac0-71e6-49d3-a0d6-f9ce86815fa5",
            },
            {
              label: "Cookies",
              url: "https://www.termsfeed.com/live/012a4e98-08d0-48ab-b716-764b86ca84df",
            },
            { label: "Sitemap", url: "/sitemap.xml" },
          ],
        },
      ],
      social: [
        {
          label: "Medium",
          icon: "logo-medium",
          url: "https://medium.com/@dustin_heisey",
        },
        {
          label: "Dribbble",
          icon: "logo-dribbble",
          url: "https://dribbble.com/dustin_heisey",
        },
        {
          label: "Behance",
          icon: "logo-behance",
          url: "https://www.behance.net/dustin_heisey",
        },
        {
          label: "LinkedIn",
          icon: "logo-linkedin",
          url: "https://www.linkedin.com/in/heiseydustin/",
        },
      ],
      copywrite: "© 2023 Ocean's Voice. All rights reserved.",
    },
  },
  pages: [
    {
      url: "index",
      title: "Join the Fight Against Desertification | Desert Bloom Initiative",
      description:
        "The Desert Bloom Initiative is dedicated to combating desertification and transforming deserts into thriving ecosystems through scientific research, innovative projects, and community engagement.",
      regions: {
        hero: {
          layout: "bg-center",
          style: {
            theme: "",
            cover: true,
          },
          headline: "Join the Fight Against Desertification",
          overline: "With the Desert Bloom Initiative",
          body: "We are a dedicated team of environmentalists, scientists, and volunteers working towards a greener future. Our mission is to combat desertification, a challenge that threatens biodiversity, climate stability, and human livelihoods. We believe in the power of collective action and are committed to transforming deserts into thriving ecosystems.",
          btn: { label: "Get Involved", url: "/get-involved" },
          bg: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        problem: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "The Growing Problem of Desertification",
          overline: "A Global Challenge",
          body: "Desertification is a significant environmental challenge, turning fertile lands into deserts. It affects millions of people, leading to food insecurity, displacement, and loss of livelihood. Desertification also threatens biodiversity and contributes to climate change. But there is hope. With concerted efforts and sustainable practices, we can combat desertification.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        guide: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Your Guide in the Fight Against Desertification",
            overline: "The Desert Bloom Initiative",
            body: "We are committed to combating desertification through scientific research, innovative projects, and community engagement. Our team consists of dedicated professionals and volunteers who believe in the power of collective action. We work closely with local communities, understanding their needs, and empowering them with the knowledge and resources to fight desertification.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        plan: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Our Plan to Combat Desertification",
          overline: "Regreening the Deserts",
          body: "Our approach involves a combination of scientific research, sustainable practices, and community involvement. We implement regreening projects that not only transform barren lands into thriving ecosystems but also improve local livelihoods. We also invest in research to develop innovative solutions for desertification. Our goal is to create a model that can be replicated globally to combat desertification.",
          items: [
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        success: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Achieving Success Together",
            overline: "A Greener Future",
            body: "With your help, we can turn the tide against desertification and create a greener, more sustainable future. Every desert bloom is a testament to what we can achieve together. Our success stories are proof of the transformative power of collective action. Join us as we work towards a future where deserts bloom with life once again.",
          },
          end: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            overline: "",
            headline: "",
            body: "",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Join Us in Making a Difference",
          overline: "Get Involved",
          body: "Your contribution can make a significant impact. Whether you choose to donate, volunteer, or partner with us, you are contributing to the fight against desertification. Every contribution helps us implement more projects, conduct more research, and reach more communities. Join us in making a difference today.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "about",
      title: "About the Desert Bloom Initiative | Desert Bloom Initiative",
      description:
        "Learn about the Desert Bloom Initiative, our mission, team, and partners. We're a dedicated team of environmentalists, scientists, and volunteers committed to combating desertification and creating a greener future.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "About the Desert Bloom Initiative",
            overline: "Who We Are",
            body: "The Desert Bloom Initiative is a dedicated team of environmentalists, scientists, and volunteers committed to combating desertification. Founded in 2023, we have been working relentlessly to transform deserts into thriving ecosystems. Our approach involves a combination of scientific research, sustainable practices, and community involvement. We believe in the power of collective action and are committed to creating a greener, more sustainable future.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        mission: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "list",
            variant: "grid",
            style: { theme: "" },
            headline: "Our Mission",
            overline: "What We Aim to Achieve",
            body: "Our mission is to combat desertification and transform barren lands into thriving ecosystems. We aim to do this through scientific research, innovative projects, and community engagement. We believe that by empowering local communities and working together, we can create sustainable solutions to desertification. Our goal is not just to transform landscapes, but also to improve local livelihoods and contribute to a more sustainable and resilient future.",
            icon: "remove",
            items: [{ icon: "remove", text: "" }],
          },
        },
        team: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Our Team",
          overline: "The People Behind the Initiative",
          body: "Our team is a diverse group of dedicated professionals and volunteers from various backgrounds, all united by a common passion for combating desertification. We have environmental scientists who lead our research efforts, project managers who ensure our projects are executed effectively, community coordinators who work closely with local communities, and many passionate volunteers who contribute their time and skills. Each member of our team plays a crucial role in making our mission a reality.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        partners: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            headline: "Our Partners",
            overline: "Working Together for a Common Cause",
            body: "We are proud to partner with various organizations that share our mission. These partnerships are invaluable to our work, providing us with additional funding, resources, and expertise. Our partners include environmental organizations, research institutions, and corporate sponsors who are committed to sustainability. Together, we are making a significant impact in the fight against desertification.",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        success: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            headline: "What People Are Saying",
            overline: "Testimonials",
            body: "Hear from our supporters, volunteers, and partners about their experiences with the Desert Bloom Initiative. Their stories highlight the impact of our work and the transformative power of collective action. From volunteers who have seen the results of our projects firsthand, to partners who have worked with us to makethese projects possible, their testimonials are a testament to the difference we can make together. Join us as we continue to work towards a future where deserts bloom with life once again.",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "about/fighting-desertification",
      title: "Fighting Desertification | Desert Bloom Initiative",
      description:
        "Discover our strategies for combating desertification, including scientific research, innovative projects, and community engagement. Join us in making a difference today.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Fighting Desertification",
            overline: "Our Strategies",
            body: "At the Desert Bloom Initiative, we are committed to combating desertification through a combination of strategies. These include scientific research, innovative projects, and community engagement. Learn more about these strategies and how they are making a difference.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        research: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Scientific Research",
            overline: "Understanding the Issue",
            body: "Scientific research is crucial to our work. We collaborate with scientists and research institutions to understand the causes of desertification and develop effective solutions. Our research informs our projects and helps us innovate in our fight against desertification.",
          },
          end: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            overline: "",
            headline: "",
            body: "",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        projects: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Innovative Projects",
          overline: "Transforming Landscapes",
          body: "Our projects are at the heart of our work. We implement a range of initiatives, from planting native vegetation to introducing sustainable farming practices. Each project is designed to restore the ecosystem, improve soil health, and enhance local livelihoods.",
          items: [
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              time: "",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        engagement: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Community Engagement",
            overline: "Empowering Communities",
            body: "We believe in the power of community. We work closely with local communities, understanding their needs and empowering them with the knowledge and resources to combat desertification. By empowering communities, we are not just transforming landscapes but also improving lives.",
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Join Us in the Fight Against Desertification",
          overline: "Get Involved",
          body: "Your contribution can make a significant impact. Whether you choose to donate, volunteer, or partner with us, you are contributing to the fight against desertification. Join us in making a difference today.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "about/understanding-desertification",
      title: "Understanding Desertification | Desert Bloom Initiative",
      description:
        "Learn about desertification, its causes, impacts, and why it's a global concern. Knowledge is a powerful tool in combating desertification and contributing to a more sustainable future.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Understanding Desertification",
            overline: "A Global Concern",
            body: "Desertification is a significant environmental challenge with far-reaching impacts. It's not just about transforming fertile lands into deserts, but also about biodiversity loss, climate change, and human livelihoods. Here, we delve into what desertification is, its causes, impacts, and why it's a global concern.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        what: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "What is Desertification?",
            overline: "Defining the Issue",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            style: { theme: "" },
            body: "Desertification is the process by which fertile land becomes desert, typically as a result of drought, deforestation, or inappropriate agriculture. It is a complex issue that involves multiple factors, including climate change, human activities, and natural processes.",
            items: [
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        cause: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          end: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Causes of Desertification",
            overline: "Understanding the Causes",
          },
          start: {
            component: "subgallery",
            variant: "stack",
            style: { theme: "" },
            body: "Desertification is caused by a combination of factors, including climate change, unsustainable land management practices, deforestation, overgrazing, and population pressure. Understanding these causes is crucial to developing effective solutions.",
            items: [
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        impact: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Impacts of Desertification",
            overline: "Far-reaching Consequences",
          },
          end: {
            component: "subgallery",
            variant: "stack",
            style: { theme: "" },
            body: "The impacts of desertification are far-reaching. It not only leads to loss of biodiversity and contributes to climate change, but also threatens human livelihoods. It can lead to food insecurity, displacement, and even conflict. The impacts of desertification underscore the urgency of addressing this issue.",
            items: [
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Why We Need to Act Now",
          overline: "The Urgency of Action",
          body: "Desertification is a pressing issue that requires immediate action. If left unchecked, it will continue to exacerbate biodiversity loss, climate change, and human suffering. The time to act is now. By understanding desertification and taking action, we can contribute to a more sustainable future.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "about/resources",
      title: "Resources on Desertification | Desert Bloom Initiative",
      description:
        "Explore our collection of resources on desertification, including research papers, articles, and videos. Stay informed and learn how you can contribute to the solution.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Resources on Desertification",
            overline: "Learn More",
            body: "At the Desert Bloom Initiative, we believe that knowledge is power. Here, you can find a range of resources on desertification, including research papers, articles, videos, and more. Learn more about the issue and how you can make a difference.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        resources: {
          layout: "gallery",
          variant: "masonry",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          overline: "",
          headline: "",
          body: "",
          items: [
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              headline: "Research Papers",
              overline: "Scientific Insights",
              body: "Explore our collection of research papers on desertification. These papers provide scientific insights into the causes, impacts, and solutions to desertification. They are a great resource for anyone looking to delve deeper into the issue.",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              headline: "Articles",
              overline: "Latest Updates",
              body: "Stay updated with the latest news and developments in the fight against desertification. Our articles cover a range of topics, from success stories of our projects to new research findings and more.",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              headline: "Videos",
              overline: "Visual Learning",
              body: "Watch our videos to see our work in action. From project highlights to interviews with our team and community members, our videos offer a visual insight into our efforts to combat desertification.",
            },
            {
              component: "card",
              style: {
                theme: "",
                span: 1,
              },
              headline: "Other Resources",
              overline: "More Information",
              body: "Find more resources on desertification, including reports, infographics, and educational materials. These resources can help you understand the issue better and learn how you can contribute to the solution.",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "our-work",
      title:
        "Our Work at the Desert Bloom Initiative | Desert Bloom Initiative",
      description:
        "Discover the work we do at the Desert Bloom Initiative, our projects, research, and community engagement initiatives. Our collective action is making a difference in the fight against desertification.",
      regions: {
        intro: {
          layout: "bg-center",
          style: {
            theme: "",
            cover: true,
          },
          headline: "Our Work at the Desert Bloom Initiative",
          overline: "Making a Difference",
          body: "At the Desert Bloom Initiative, our work is centered around combating desertification through a combination of scientific research, innovative projects, and community engagement. We believe in the power of collective action and are committed to transforming barren lands into thriving ecosystems.",
          bg: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        projects: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Our Projects",
          overline: "Transforming Deserts",
          body: "Our projects are at the heart of our work. We implement a range of initiatives, from planting native vegetation to introducing sustainable farming practices. Each project is designed to restore the ecosystem, improve soil health, and enhance local livelihoods. Our projects not only transform the landscape but also empower local communities.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        research: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Our Research",
            overline: "Driving Innovation",
            body: "Research is a crucial part of our work. We collaborate with scientists and research institutions to understand the causes of desertification and develop effective solutions. Our research informs our projects and helps us innovate. From studying the impact of climate change on desertification to exploring new regreening techniques, our research is driving innovation in the fight against desertification.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        engagement: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Community Engagement",
            overline: "Empowering Communities",
            body: "We believe in the power of community. We work closely with local communities, understanding their needs and empowering them with the knowledge and resources to combat desertification. Our community engagement initiatives include educational programs, participatory projects, and capacity-building workshops. By empowering communities, we are not just transforming landscapes but also improving lives.",
          },
        },
        impact: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            headline: "Our Impact",
            overline: "Making a Difference",
            body: "Since our inception, we have made a significant impact in the fight against desertification. We have implemented numerous projects, reached hundreds of communities, and restored thousands of hectares of land. Our impact stats are a testament to the difference we can make when we work together.",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        goals: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            headline: "Our Future Plans",
            overline: "Looking Ahead",
            body: "We are committed to expanding our work andreaching more communities. Our future plans include scaling up our projects, investing in more research, and strengthening our community engagement initiatives. We aim to create a model that can be replicated globally to combat desertification. With your support, we can make these plans a reality.",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "our-work/impact",
      title: "Our Impact | Desert Bloom Initiative",
      description:
        "Discover the tangible impact of our work in the fight against desertification. Through projects, research, and community engagement, we are transforming barren lands into thriving ecosystems.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Our Impact at the Desert Bloom Initiative",
            overline: "Making a Difference",
            body: "At the Desert Bloom Initiative, we are committed to making a tangible impact in the fight against desertification. Through our projects, research, and community engagement, we are transforming barren lands into thriving ecosystems and improving local livelihoods. Our impact is a testament to the power of collective action.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        success: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Success Stories",
          overline: "Transforming Deserts",
          body: "Our success stories are a testament to the transformative power of our work. From barren lands turned into thriving ecosystems to communities empowered with the knowledge and resources to combat desertification, these stories inspire us to continue our work.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        stats: {
          layout: "stack",
          style: {
            theme: "",
            cover: false,
          },
          headline: "Our Impact by the Numbers",
          overline: "Making a Difference",
          body: "Since our inception, we have made a significant impact in the fight against desertification. We have implemented numerous projects, reached hundreds of communities, and restored thousands of hectares of land. Our impact stats are a testament to the difference we can make when we work together.",
          items: [
            {
              component: "stats",
              variant: "inline",
              style: { theme: "" },
              overline: "",
              headline: "",
              body: "",
              items: [
                {
                  headline: "",
                  body: "",
                },
              ],
            },
          ],
        },
        gallery: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Our Work in Pictures",
          overline: "Gallery",
          body: "Take a look at our gallery to see our work in action. From our projects to our community engagement initiatives, these images capture the essence of our work.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Join Us in Making a Difference",
          overline: "Get Involved",
          body: "Your contribution can make a significant impact. Whether you choose to donate, volunteer, or partner with us, you are contributing to the fight against desertification. Join us in making a difference today.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "our-work/partners",
      title: "Partnerships | Desert Bloom Initiative",
      description:
        "Partnerships play a crucial role in our work. We collaborate with diverse organizations in the fight against desertification. Join us and amplify the impact.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Partnerships with the Desert Bloom Initiative",
            overline: "Collaborate with Us",
            body: "Partnerships are crucial to our work at the Desert Bloom Initiative. We collaborate with a range of organizations, from environmental groups to research institutions. If your organization shares our mission, we would love to hear from you. Together, we can make a greater impact.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        partners: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Our Partners",
          overline: "Working Together",
          body: "We are proud to partner with a diverse range of organizations that share our commitment to combating desertification. Our partners contribute in various ways, from providing funding and resources to collaborating on projects and research.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              img: { src: "", alt: "" },
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        opportunities: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Partnership Opportunities",
            overline: "Join Us",
            body: "We are always open to new partnerships. If your organization is interested in combating desertification, we would love to hear from you. We offer various partnership opportunities, from project collaboration to sponsorship and more.",
          },
        },
        form: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "form",
            style: { theme: "" },
            headline: "Become a Partner",
            overline: "Get in Touch",
            body: "Ready to become a partner? Fill out the form below to express your interest. We will get back to you with more information about our partnership opportunities.",
            inputs: [
              { required: true, label: "", id: "", type: "text" },
              { required: true, label: "", id: "", type: "email" },
            ],
            submit: "Become a Partner",
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Other Ways to Get Involved",
          overline: "Get Involved",
          body: "There are many ways to support the Desert Bloom Initiative. From donations to volunteering, discover other ways you can get involved and make a difference.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "get-involved",
      title: "Get Involved | Desert Bloom Initiative",
      description:
        "Contribute to the fight against desertification. Discover how you can donate, volunteer, or partner with us to make a significant difference in this global challenge.",
      regions: {
        intro: {
          layout: "bg-center",
          style: {
            theme: "",
            cover: true,
          },
          headline: "Get Involved with the Desert Bloom Initiative",
          overline: "Join Our Cause",
          body: "At the Desert Bloom Initiative, we believe in the power of collective action. Whether you choose to donate, volunteer, or partner with us, you are making a significant contribution to the fight against desertification. Join us as we work towards a greener, more sustainable future.",
          bg: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        donate: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Donate",
            overline: "Make a Contribution",
            body: "Your donation can make a significant impact. Funds go directly towards our projects, research, and community engagement initiatives. Every contribution, no matter how small, helps us combat desertification and transform barren lands into thriving ecosystems.",
            btn: { label: "Donate", url: "/donate", variant: "secondary" },
          },
        },
        volunteer: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            headline: "Volunteer",
            overline: "Give Your Time",
            body: "Volunteering is a rewarding way to get involved. As a volunteer, you can contribute your skills, learn about desertification, and make a difference in the fight against desertification. We have a range of volunteer opportunities available, from fieldwork to community outreach.",
            btn: {
              label: "Volunteer",
              url: "get-involved/volunteer",
              variant: "secondary",
            },
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
        },
        partners: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Partnerships",
            overline: "Collaborate with Us",
            body: "Partnerships are crucial to our work. We collaborate with a range of organizations, from environmental groups to research institutions. If your organization shares our mission, we would love to hear from you. Together, we can make a greater impact.",
            btn: {
              label: "Become a Partner",
              url: "/partners",
              variant: "secondary",
            },
          },
        },
        faq: {
          layout: "accordion",
          style: {
            theme: "",
            cover: false,
          },
          headline: "Frequently Asked Questions",
          overline: "Have More Questions?",
          body: "Have more questions about getting involved with the Desert Bloom Initiative? Check out our FAQ section for more information. If you can’t find the answer you’re looking for, feel free to contact us.",
          items: [
            {
              component: "details",
              style: { theme: "" },
              headline: "",
              body: "",
            },
            {
              component: "details",
              style: { theme: "" },
              headline: "",
              body: "",
            },
            {
              component: "details",
              style: { theme: "" },
              headline: "",
              body: "",
            },
            {
              component: "details",
              style: { theme: "" },
              headline: "",
              body: "",
            },
            {
              component: "details",
              style: { theme: "" },
              headline: "",
              body: "",
            },
          ],
        },
      },
    },
    {
      url: "get-involved/volunteer",
      title: "Volunteer | Desert Bloom Initiative",
      description:
        "Become a volunteer with the Desert Bloom Initiative. Contribute your skills, learn about desertification, and take part in transforming barren lands into thriving ecosystems.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Volunteer with the Desert Bloom Initiative",
            overline: "Give Your Time",
            body: "Volunteering is a rewarding way to get involved with the Desert Bloom Initiative. As a volunteer, you can contribute your skills, learn about desertification, and make a difference in the fight against desertification. We have a range of volunteer opportunities available, from fieldwork to community outreach.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        opportunities: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "Volunteer Opportunities",
            overline: "Get Involved",
            body: "We have a range of volunteer opportunities available, depending on your interests and skills. From helping with our projects in the field to assisting with community outreach and education, there are many ways you can contribute as a volunteer.",
          },
        },
        experience: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "The Volunteer Experience",
          overline: "Make a Difference",
          body: "As a volunteer, you will have the opportunity to work closely with our team, learn about desertification, and make a tangible impact. It's a rewarding experience that allows you to contribute to a vital cause while gaining valuable experience and skills.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        form: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "form",
            style: { theme: "" },
            headline: "Become a Volunteer",
            overline: "Join Us",
            body: "Ready to become a volunteer? Fill out the form below to express your interest. We will get back to you with more information about our volunteer opportunities.",
            inputs: [
              { required: true, label: "", id: "", type: "text" },
              { required: true, label: "", id: "", type: "email" },
            ],
            submit: "Become a Volunteer",
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Other Ways to Get Involved",
          overline: "Get Involved",
          body: "There are many ways to support the Desert Bloom Initiative. From donations to partnerships, discover other ways you can get involved and make a difference.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "contact",
      title: "Contact Us | Desert Bloom Initiative",
      description:
        "Have a question, comment, or suggestion? We’d love to hear from you. Contact the Desert Bloom Initiative and let's work together against desertification.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Contact the Desert Bloom Initiative",
            overline: "Get in Touch",
            body: "Have a question, comment, or suggestion? We’d love to hear from you. Get in touch with us using the contact information or form below.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        form: {
          layout: "center",
          style: {
            theme: "",
            cover: false,
          },
          content: {
            component: "form",
            style: { theme: "" },
            headline: "Send Us a Message",
            overline: "Contact Form",
            body: "Prefer to send us a message? Fill out the form below with your details and message. We will get back to you as soon as possible.",
            inputs: [
              { required: true, label: "", id: "", type: "text" },
              { required: true, label: "", id: "", type: "email" },
              { required: true, label: "", id: "", type: "textarea" },
            ],
            submit: "",
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Other Ways to Get Involved",
          overline: "Get Involved",
          body: "There are many ways to support the Desert Bloom Initiative. From donations to volunteering, discover other ways you can get involved and make a difference.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
    {
      url: "donate",
      title: "Donate | Desert Bloom Initiative",
      description:
        "Every donation can make a significant impact in the fight against desertification. Help fund our projects, research, and community engagement initiatives, and transform barren lands into thriving ecosystems.",
      regions: {
        intro: {
          layout: "end-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "page",
            headline: "Donate to the Desert Bloom Initiative",
            overline: "Makea Contribution",
            body: "Your donation can make a significant impact in the fight against desertification. Funds go directly towards our projects, research, and community engagement initiatives. Every contribution, no matter how small, helps us combat desertification and transform barren lands into thriving ecosystems.",
          },
          end: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave.png",
          },
        },
        transparency: {
          layout: "gallery",
          style: {
            theme: "",
            cover: false,
            col: 3,
          },
          headline: "Where Your Money Goes",
          overline: "Transparency",
          body: "We believe in transparency. When you donate to the Desert Bloom Initiative, you can be assured that your money is going towards our mission. Funds are used for our projects, research, and community engagement initiatives. We are committed to using every dollar efficiently to make the greatest impact possible.",
          items: [
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
            {
              component: "blurb",
              style: {
                theme: "",
              },
              icon: "remove",
              overline: "",
              headline: "",
              body: "",
            },
          ],
        },
        impact: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "text",
            style: { theme: "" },
            size: "region",
            headline: "The Impact of Your Donation",
            overline: "Making a Difference",
            body: "Every donation makes a difference. Your contribution could help plant trees, fund research, or empower a community. By donating, you are making a tangible impact in the fight against desertification and contributing to a more sustainable future.",
          },
          end: {
            component: "stats",
            variant: "grid",
            style: { theme: "" },
            overline: "",
            headline: "",
            body: "",
            items: [
              {
                headline: "",
                body: "",
              },
            ],
          },
        },
        form: {
          layout: "start-heavy",
          style: {
            theme: "",
            cover: false,
          },
          start: {
            component: "img",
            style: {
              theme: "",
              ar: "square",
            },
            src: "wave.png",
            alt: "wave",
          },
          end: {
            component: "form",
            style: { theme: "" },
            headline: "Make a Donation Today",
            overline: "Donate",
            body: "Ready to make a donation? Fill out the form below to make a secure online donation. Thank you for your support.",
            inputs: [
              { required: true, label: "", id: "", type: "text" },
              { required: true, label: "", id: "", type: "email" },
              {
                required: true,
                label: "",
                id: "",
                type: "range",
                min: "500",
                max: "10000",
                step: "500",
                value: "500",
                output: "$",
              },
              {
                required: true,
                label: "",
                id: "",
                type: "radio-cards",
                cards: [
                  { value: "Branding", icon: "branding" },
                  { value: "Web Design", icon: "web-design" },
                  { value: "Optimization", icon: "performance" },
                ],
              },
            ],
            submit: "",
          },
        },
        action: {
          layout: "bg-pattern",
          style: {
            theme: "",
            cover: false,
          },
          pattern: "",
          headline: "Other Ways to Get Involved",
          overline: "Get Involved",
          body: "There are many ways to support the Desert Bloom Initiative. From volunteering to partnerships, discover other ways you can get involved and make a difference.",
          btn: { label: "Get Involved", url: "/get-involved" },
        },
      },
    },
  ],
};
