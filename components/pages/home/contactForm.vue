<script setup></script>

<template>
  <section id="contactForm" class="!mb-0">
    <div class="contact-form overlay">
      <div class="contact-form-gradient"></div>
      <div class="section-title">
        <h3 class="relative z-30">Contact</h3>
      </div>
      <div
        class="mb-8 flex flex-col items-center justify-center gap-6 text-white"
      >
        <h5 class="z-30 text-3xl font-semibold md:text-5xl">Stay In Touch</h5>
        <p class="z-30 text-center text-lg">
          If you're interested in hiring me or collaborating,<br />
          feel free to reach out for recruitment, partnership or follow to stay
          in touch
        </p>
      </div>
      <div class="mx-auto grid grid-cols-1 gap-8 md:w-2/3 md:grid-cols-2">
        <a href="mailto:hagaiexcellent3@gmail.com">
          <div
            class="group flex cursor-pointer gap-3 rounded-2xl bg-white bg-opacity-20 p-5"
          >
            <div
              class="h-fit rounded-xl bg-secondary p-3 transition-colors duration-500 ease-in-out group-hover:bg-white"
            >
              <Iconify
                icon="mdi:email"
                class="text-2xl text-white transition-colors duration-500 ease-in-out group-hover:text-secondary"
              />
            </div>
            <div class="space-y-1 text-white">
              <div class="flex gap-3">
                <div class="text-lg font-bold">Email</div>
                <div>
                  <Iconify
                    icon="mynaui:arrow-right"
                    class="-rotate-45 text-2xl transition duration-500 ease-in-out group-hover:rotate-0"
                  />
                </div>
              </div>
              <div class="text-sm">
                I always check up on my email daily, this is my primary contact
                method
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.instagram.com/hagaiexcell/" target="_blank">
          <div
            class="group flex cursor-pointer gap-3 rounded-2xl bg-white bg-opacity-20 p-5"
          >
            <div
              class="h-fit rounded-xl bg-secondary p-3 transition-colors duration-500 ease-in-out group-hover:bg-white"
            >
              <Iconify
                icon="ri:instagram-fill"
                class="text-2xl text-white transition-colors duration-500 ease-in-out group-hover:text-secondary"
              />
            </div>
            <div class="space-y-1 text-white">
              <div class="flex gap-3">
                <div class="text-lg font-bold">Instagram</div>
                <div>
                  <Iconify
                    icon="mynaui:arrow-right"
                    class="-rotate-45 text-2xl transition duration-500 ease-in-out group-hover:rotate-0"
                  />
                </div>
              </div>
              <div class="text-sm">
                I occasionally share my social activity and connect with peers
                through Instagram.
              </div>
            </div>
          </div>
        </a>
        <a href="https://www.linkedin.com/in/hagaiexcell/" target="_blank">
          <div
            class="group flex cursor-pointer gap-3 rounded-2xl bg-white bg-opacity-20 p-5"
          >
            <div
              class="h-fit rounded-xl bg-secondary p-3 transition-colors duration-500 ease-in-out group-hover:bg-white"
            >
              <Iconify
                icon="mdi:linkedin"
                class="text-2xl text-white transition-colors duration-500 ease-in-out group-hover:text-secondary"
              />
            </div>
            <div class="space-y-1 text-white">
              <div class="flex gap-3">
                <div class="text-lg font-bold">Linkedin</div>
                <div>
                  <Iconify
                    icon="mynaui:arrow-right"
                    class="-rotate-45 text-2xl transition duration-500 ease-in-out group-hover:rotate-0"
                  />
                </div>
              </div>
              <div class="text-sm">
                I actively use LinkedIn for professional networking and career
                opportunities.
              </div>
            </div>
          </div>
        </a>
        <a href="https://github.com/excellent-hwg" target="_blank">
          <div
            class="group flex cursor-pointer gap-3 rounded-2xl bg-white bg-opacity-20 p-5"
          >
            <div
              class="h-fit rounded-xl bg-secondary p-3 transition-colors duration-500 ease-in-out group-hover:bg-white"
            >
              <Iconify
                icon="line-md:github"
                class="text-2xl text-white transition-colors duration-500 ease-in-out group-hover:text-secondary"
              />
            </div>
            <div class="space-y-1 text-white">
              <div class="flex gap-3">
                <div class="text-lg font-bold">Github</div>
                <div>
                  <Iconify
                    icon="mynaui:arrow-right"
                    class="-rotate-45 text-2xl transition duration-500 ease-in-out group-hover:rotate-0"
                  />
                </div>
              </div>
              <div class="text-sm">
                I regularly update my projects and collaborate with other
                developers on GitHub.
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
