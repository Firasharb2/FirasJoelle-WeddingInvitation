<template>
  <div class="background">
    <div
      class="content"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <img
        :src="images[currentIndex]"
        class="main-image"
        style="height: 1500px"
      />
      <div
        v-show="currentTextIndex === 1"
        class="inside"
        :style="{
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }"
      ></div>
      <!-- here was: -->
      <div class="sp">
        <p class="drag"></p>
      </div>

      <!-- New TExt -->

      <div
        v-show="currentTextIndex === 1"
        class="inside"
        style="color: #3e71aa"
      >
        <h1 style="font-size: 40px">
          {{ userNative.groomName }} <br />
          {{ userNative.and }} <br />
          {{ userNative.brideName }}
        </h1>
      </div>
      <!-- New TExt -->
      <div
        v-show="currentTextIndex === 2"
        style="color: #3e71aa; font-size: 30px"
      >
        <div class="inside">
          <blockquote>
            <p style="font-size: 30px">
              {{ userNative.Bible.verse }}
            </p>
          </blockquote>

          <h4>{{ userNative.Bible.reference }}</h4>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 3" style="color: #3e71aa">
        <div class="inside">
          <h1>{{ userNative.Family.title }}</h1>
          <div class="A">
            <h3>
              {{ userNative.Family.groomParents.fatherName }}
              {{ userNative.and }}
              {{ userNative.Family.groomParents.motherName }}
              {{ userNative.Family.groomParents.familyName }}
            </h3>

            <h3>
              {{ userNative.Family.brideParents.fatherName }}
              <!-- {{ userNative.and }} -->
              {{ userNative.Family.brideParents.motherName }}
              {{ userNative.Family.brideParents.familyName }}
            </h3>

            <h4>{{ userNative.Family.honoredTo }}</h4>

            <h3>
              {{ userNative.groomName }} {{ userNative.and }}
              {{ userNative.brideName }}
            </h3>
            <h3>{{ userNative.Family.wedDate }}</h3>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 4" style="color: #3e71aa">
        <!-- Add your content for div 4 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp"
                >{{ userNative.Ceremony.title }} <br /> </span
              ><span class="subtitle" style="font-size: 25px">
                {{ userNative.Ceremony.subTitle }}</span
              >
            </h1>

            <div class="event_details">
              <div class="info-row date">
                <div class="clock icon">
                  <!-- Displaying an image -->
                  <!-- <img src="../assets/s2/clock.jpg" alt="Description of your image"> -->
                  <img src="../assets/images/dateTime1.png" />
                </div>
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px"
                    >{{ userNative.Ceremony.dateTime }}
                  </span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/images/location1.png" />
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px">
                    {{ userNative.Ceremony.churchName }}</span
                  ><br />
                  <span class="data-line-2">{{
                    userNative.Ceremony.churchLocation
                  }}</span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    :href="userNative.Ceremony.locationLink"
                    target="_blank"
                    class="button"
                  >
                    <span>{{ userNative.locationButton }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 5" style="color: #3e71aa">
        <!-- Add your content for div 5 -->
        <div class="inside">
          <div class="story_slide_wrapper">
            <h1 class="title visible-title">
              <span class="hdtitle Title_Disp"
                >{{ userNative.Party.title }}<br /><br /> </span
              ><span class="subtitle"></span>
            </h1>

            <div class="event_details">
              <div class="info-row date">
                <div class="clock icon">
                  <!-- Displaying an image -->

                  <img src="../assets/images/dateTime1.png" />
                </div>
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px"
                    >{{ userNative.Party.datetimeinfo }} <br />
                  </span>
                </div>
              </div>
              <div class="info-row loc">
                <img src="../assets/images/location1.png" />
                <div class="col info">
                  <span class="data-line-1" style="font-size: 20px">
                    {{ userNative.Party.placeName }}</span
                  ><br />
                  <span class="data-line-2">
                    {{ userNative.Party.partyLocationName }}
                  </span>
                </div>
                <div class="col mapBtn mapBtn_1">
                  <br />
                  <!-- Button with link -->
                  <a
                    :href="userNative.Party.locationLink"
                    target="_blank"
                    class="button"
                  >
                    <span> {{ userNative.locationButton }}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 6" style="color: #3e71aa">
        <!-- Add your content for div 6 -->
        <div class="inside">
          <h1 class="title visible-title">
            <span class="hdtitle Title_Disp">{{
              userNative.gifting.title
            }}</span>
          </h1>
          <p>
            {{ userNative.gifting.subTitle }}
          </p>
          <h3>Acc#: {{ userNative.gifting.accountNumber }}</h3>
        </div>
      </div>
      <!-- New TExt -->
      <div v-show="currentTextIndex === 7" style="color: #3e71aa">
        <div class="inside">
          <!-- slide -->

          <div class="Attendance">
            <h1>حضوركم يسعدنا</h1>

            <div class="Attendance-content">
              <h3>الرجاء تأكيد الحضور قبل ٢٠ حزيران، ٢٠٢٤</h3>

              <div class="form-wrapper">
                <form id="rsvp-event" method="post" name="rsvp_form" action="/">
                  <div class="form-field fld-name">
                    <!-- <h6>الأسماء</h6> -->
                    <input
                      type="text"
                      v-model="invitiesNames"
                      placeholder="قدم اسمًا واحدًا أو أكثر"
                    />
                    <label for="full_name"> :الأسماء </label>
                  </div>
                  <br />

                  <div class="form-guests">
                    <select
                      id="guests"
                      name="guests"
                      v-model="attendanceStatus"
                    >
                      <option value="">- الاختيار -</option>
                      <option value="Attending">نعم سأحضر</option>
                      <option value="Not Attending">لن أحضر</option>
                    </select>
                    <label for="guests">هل ستحضر؟ </label>
                  </div>
                  <br />

                  <div class="nbpersons">
                    <select
                      id="npersons"
                      name="npersons"
                      v-model="numberOfPersons"
                    >
                      <option value="">- الاختيار -</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <label for="npersons">عدد القادمين</label>
                  </div>
                  <br />

                  <button class="confirm" @click.prevent="sendEmail()">
                    تأكيد الحضور
                  </button>
                  <div class="form-lock-screen"></div>
                </form>

                <div class="ajax_success_message_wrapper">
                  <!-- <p>
                    شكراً لتأكيد حضوركم!<br />
                    نراكم قريباً
                  </p> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- New TExt -->
      <!-- New TExt -->
      <div v-show="currentTextIndex === 8" style="color: #3e71aa">
        <div class="inside">
          <!-- slide -->

          <h1>شكراً لتأكيد حضوركم</h1>
        </div>
      </div>

      <!-- Add more content inside divs for other slides -->
    </div>
    <button class="start-button" @click="startSlideshow" v-if="!timer">
      أنقر للبدء
    </button>
  </div>
  <!-- musicbutton -->
  <div class="musicImg">
    <img
      src="../assets/images/musicHeart.png"
      alt="Play Button"
      @click="toggleMusic()"
    />
    <!-- <img
        :src="isPlaying ? '/pause_button.png' : '/play_button.png'"
        alt="Play/Pause Button"
        @click="toggleMusic"
      /> -->
  </div>
</template>

<script>
import audiox from "../assets/music/Calum Scott, Leona Lewis - You Are The Reason (Duet Version).mp3";
import EmailService from "../assets/smtp.js";

export default {
  name: "HomeView",
  data() {
    return {
      invitiesNames: "",
      attendanceStatus: "",
      numberOfPersons: "",
      currentIndex: 0,
      currentTextIndex: 0,
      audio: new Audio(audiox),
      isPlaying: false,
      images: [
        require("../assets/images/aa.jpg"),
        require("../assets/images/bb.jpg"),
        require("../assets/images/cc.jpg"),
        require("../assets/images/dd.jpg"),
        require("../assets/images/ee.jpg"),
        require("../assets/images/ff.jpg"),
        require("../assets/images/gg.jpg"),
        require("../assets/images/dd.jpg"),
      ],
      touchStartX: 0,
      touchEndX: 0,
      timer: null,

      userNative: {
        groomName: "فراس",
        brideName: "جوال",
        and: "و",

        Bible: {
          verse: "أُعْطِيهِمْ قَلْبًا وَاحِدًا وَطَرِيقًا وَاحِدًا",
          reference: "سفر إرميا 32: 39",
        },
        Family: {
          title: "بحضوركم تكتمل فرحتنا",
          groomParents: {
            fatherName: "جوزيف",
            motherName: "مرغو",
            familyName: "حرب",
          },
          brideParents: {
            fatherName: "",
            motherName: "نوال",
            familyName: "الشالوحي",
          },
          honoredTo: "يتشرفون بدعوتكم لحضور إكليل ولديهما",
          wedDate: "نهار الجمعة الواقع في ١٢ تموز ٢٠٢٤",
        },

        Ceremony: {
          title: "الاكليل",
          subTitle: "يليه شبك السيوف أمام مدخل الكنيسة",
          dateTime: "١٢ تموز ٢٠٢٤ ٦:٠٠ مساءً ",
          churchName: "كنيسة القديسة مريم المجدلية",
          churchLocation: "المجدل",
          locationLink:
            "https://www.google.com/maps/place/Saint+Maria+Magdalena+church/@34.2537314,35.7973507,17.34z/data=!4m15!1m8!3m7!1s0x1521fdaf959e7a8f:0x4ea3aa28725028c2!2z2YXYrNiv2YQ!3b1!8m2!3d34.252387!4d35.793724!16s%2Fm%2F0gw_rfb!3m5!1s0x1521fdb1c6b480b1:0x1742f3316f60327!8m2!3d34.2536743!4d35.7963548!16s%2Fg%2F11csr_mkjz?entry=ttu",
        },
        Party: {
          title: "حفل العشاء",
          datetimeinfo: " بعد الإكليل  ٨:٠٠ مساءً ",
          placeName: "نادي الضباط جونية",
          partyLocationName: "صربا، جونية",
          locationLink:
            "http://maps.google.com/maps?q=33.98535123348712,35.62196422144931",
        },
        locationButton: "خريطة الموقع",
        gifting: {
          title: "الهدايا",
          subTitle:
            "حضوركم، ضحكتم وحبكم هو أثمن هدية على الإطلاق. فإن وددتم مشاركتنا بهدية فنحن نستقبلها .Whish على حسابنا في ً",
          accountNumber: "76188327",
        },
      },
    };
  },

  methods: {
    toggleMusic() {
      if (this.isPlaying) {
        this.audio.pause(); // Pause the music
        this.isPlaying = false; // Set isPlaying to false
      } else {
        // Check if the audio is paused or not loaded
        if (this.audio.paused || this.audio.readyState < 3) {
          // Start playing the music
          this.audio.play();
          this.isPlaying = true; // Set isPlaying to true
        }
      }
    },
    sendEmail() {
      document.querySelector(".Attendance").innerHTML =
        "<h1>شكراً لتأكيد حضوركم</h1>";
      console.log(
        "Names: " +
          this.invitiesNames +
          ",\nStatus:" +
          this.attendanceStatus +
          ", \nNumber of Attendees: " +
          +this.numberOfPersons +
          ""
      );
      //emailnewonecode:
      const emailData = {
        Host: "smtp.elasticemail.com",
        Username: "firas.harb2@gmail.com",
        Password: "BFE86957F740CF13A6D246B79221DD375C8B",
        To: "firas.alphauniverse@gmail.com",
        From: "firas.harb2@gmail.com",
        Subject: "Confirmation of Attendence",
        Body:
          "Names: " +
          this.invitiesNames +
          ",\n\nStatus:" +
          this.attendanceStatus +
          ", \n \nNumber of Attendees: " +
          +this.numberOfPersons +
          "",
      };

      EmailService.send(emailData)
        .then((response) => {
          // Handle success
          console.log(response);
        })
        .catch((error) => {
          // Handle error
          console.error(error);
        });
    },
    startSlideshow() {
      this.isPlaying = true;
      // Access the element with the class "swipe"
      const swipeElement = document.querySelector(".drag");
      // Set its inner HTML to the value of the message property
      swipeElement.innerHTML = "← إسحب →";
      // Add a style to change the color
      swipeElement.style.color = "white"; // Change "red" to the color you desire
      this.audio.play();
      this.currentTextIndex = 1;
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 2000); // Change slide every 1.5 seconds

      // Touch event handlers
      const onTouchStart = (event) => {
        // Check if the touch event is on the link
        if (!event.target.closest("a.button")) {
          this.touchStartX = event.touches[0].clientX;
        }
      };

      const onTouchMove = (event) => {
        // Check if the touch event is on the link
        if (!event.target.closest("a.button")) {
          this.touchEndX = event.touches[0].clientX;
        }
      };

      const onTouchEnd = () => {
        const diff = this.touchEndX - this.touchStartX;
        if (diff > 0) {
          // Swipe right, decrement currentIndex
          this.currentTextIndex = Math.max(0, this.currentTextIndex - 1);
        } else if (diff < 0) {
          // Swipe left, increment currentIndex
          this.currentTextIndex = Math.min(
            this.currentTextIndex + 1,
            this.images.length - 1
          );
        }
        // Reset touch values
        this.touchStartX = 0;
        this.touchEndX = 0;
      };

      // Assign touch event handlers
      document.addEventListener("touchstart", onTouchStart);
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);

      // Clean up touch event listeners when slideshow stops
      const stopSlideshow = () => {
        clearInterval(this.timer);
        this.timer = null;
        document.removeEventListener("touchstart", onTouchStart);
        document.removeEventListener("touchmove", onTouchMove);
        document.removeEventListener("touchend", onTouchEnd);
      };

      // Call stopSlideshow when the component is about to be unmounted
      this.$options.beforeUnmount = stopSlideshow;
    },

    // stopSlideshow() {
    //   clearInterval(this.timer);
    //   this.timer = null; // Reset timer to null
    // },
  },
  beforeUnmount() {
    clearInterval(this.timer); // Clear the timer when the component is destroyed
  },
  stopPropagation(event) {
    event.stopPropagation();
  },

  sendWhatsAppMessage() {
    const phoneNumber = "96176188327"; // Replace with the recipient's phone number
    const message = encodeURIComponent("Hello, this is a pre-filled message!"); // Your pre-filled message

    // Create the WhatsApp message link
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");
  },
};
</script>

<style>
.content h1 {
  font-size: 36px; /* Adjust the font size as needed */
}

@media screen and (max-width: 768px) {
  /* Adjustments for screens up to 768px wide */
  .main-image {
    max-width: 100%;
    max-height: 100%; /* Reduce the image size */
  }
  .start-button {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff336600;
    color: #ffffff;
    border: 2px solid #ffffff; /* Border added */
    border-radius: 50%; /* Make it circular */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100px; /* Example width, adjust as needed */
    height: 100px; /* Example height, adjust as needed */
  }
  .background {
    /* background-color: #e72121;
      padding: 1px;
      text-align: center;
      height: 100vh; */
    background-color: #21e777;
    padding: 1px;
    text-align: center;
    height: 100vh;
    display: flex; /* Use flexbox to center content vertically and horizontally */
    justify-content: center;
    align-items: center;
  }

  .content {
    height: 100%; /* Set the height to 100% of its parent element (background) */
    width: 100%; /* Set the width to 100% of its parent element (background) */
    position: relative; /* Ensure relative positioning */
  }

  .image-container {
    position: relative; /* Make image container position relative */
    max-width: 100%; /* Set maximum width to prevent overflow */
    max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
  }

  .main-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
  }
  .inside {
    position: absolute;
    top: 50%; /* Position at the vertical center */
    left: 50%; /* Position at the horizontal center */
    transform: translate(-50%, -50%); /* Center the element */
    text-align: center; /* Center the text horizontally */
    width: 80%; /* Adjust width as needed */
  }
}
@media screen and (max-width: 480px) {
  /* Adjustments for screens up to 480px wide (typical phone screens) */
  .main-image {
    max-width: 100%;
    max-height: 100%; /* Further reduce the image size for smaller screens */
  }
  .start-button {
    position: absolute;
    bottom: 200px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #ff336600;
    color: #ffffff;
    border: 2px solid #ffffff; /* Border added */
    border-radius: 50%; /* Make it circular */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    width: 100px; /* Example width, adjust as needed */
    height: 100px; /* Example height, adjust as needed */
  }
  .background {
    background-color: #81e721; /* Change background color to green */
    padding: 1px;
    text-align: center;
    height: 100vh;
    display: flex; /* Use flexbox to center content vertically and horizontally */
    justify-content: center;
    align-items: center;
  }

  .content {
    height: 100%; /* Set the height to 100% of its parent element (background) */
    width: 100%; /* Set the width to 100% of its parent element (background) */
    position: relative; /* Ensure relative positioning */
  }

  .image-container {
    position: relative; /* Make image container position relative */
    max-width: 100%; /* Set maximum width to prevent overflow */
    max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
  }

  .main-image {
    max-width: 100%;
    max-height: 100%;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
  }
  .inside {
    position: absolute;
    top: 50%; /* Position at the vertical center */
    left: 50%; /* Position at the horizontal center */
    transform: translate(-50%, -50%); /* Center the element */
    text-align: center; /* Center the text horizontally */
    width: 80%; /* Adjust width as needed */
  }
}

.start-button {
  position: absolute;
  bottom: 200px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #ff336600;
  color: #ffffff;
  border: 2px solid #ffffff; /* Border added */
  border-radius: 50%; /* Make it circular */
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100px; /* Example width, adjust as needed */
  height: 100px; /* Example height, adjust as needed */
}
.background {
  /* background-color: #e72121;
      padding: 1px;
      text-align: center;
      height: 100vh; */
  background-color: #f2f1f1;
  padding: 1px;
  text-align: center;
  height: 100vh;
  display: flex; /* Use flexbox to center content vertically and horizontally */
  justify-content: center;
  align-items: center;
}

.content {
  height: 100%; /* Set the height to 100% of its parent element (background) */
  width: 100%; /* Set the width to 100% of its parent element (background) */
  position: relative; /* Ensure relative positioning */
}

/* .image-container {
      position: relative;
      max-width: 600px;
      max-height: 2000px;
      margin: auto;
    } */
.image-container {
  position: relative; /* Make image container position relative */
  max-width: 100%; /* Set maximum width to prevent overflow */
  max-height: 100vh; /* Set maximum height to prevent overflow and fit within viewport */
}

.main-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  margin: auto;
  object-fit: contain; /* This property ensures that the image maintains its aspect ratio while filling the available space */
}
.inside {
  position: absolute;
  top: 50%; /* Position at the vertical center */
  left: 50%; /* Position at the horizontal center */
  transform: translate(-50%, -50%); /* Center the element */
  text-align: center; /* Center the text horizontally */
  width: 80%; /* Adjust width as needed */
}
.drag {
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  bottom: 0;
  width: 100px; /* Example width, adjust as needed */
  height: 100px; /* Example height, adjust as needed */
}
/* locationbtn: */
.button {
  display: inline-block;
  background-color: #3e71aa; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;
  border-radius: 8px;
}

.button:hover {
  background-color: #455aa0; /* Darker blue */
}

/*musicImg*/
.musicImg {
  position: absolute;
  bottom: 1px;
  left: -9%;
  transform: translateX(-50%);
  transform: translateY(50%);
  background-color: #ff336600;
  color: #ffffff;

  border-radius: 50%;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
  height: 100px;
}
</style>
