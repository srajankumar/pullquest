import React from "react";

const instructions = () => {
  return (
    <div>
      <div className="container text-justify justify-center md:p-10 p-5 mb-10 items-center">
        <div className="flex text-3xl font-bold mx-10 my-5">
          Hey there, fellow developer!
        </div>
        <div className="flex text-xl m-10">
          Are you ready to embark on an epic journey with your first pull
          request? Let's dive right into the action and make some magic happen!
          🔥✨
        </div>
        <div className="text-xl m-10">
          To begin, we need to fork the mighty repository 📂. Head over to the
          legendary realm of{" "}
          <span className="font-bold">
            <a href="https://github.com/srajankumar/pullquest" target="_blank">
              https://github.com/srajankumar/pullquest
            </a>{" "}
          </span>
          and behold the fork icon proudly displayed in the top-right corner.
          With a single click, claim your own copy of the repository and make it
          your own.
        </div>
        <div className="flex text-xl m-10">
          Now, let's bring the power of code to your local machine. Behold the
          green button labeled "Code"! Click it and copy the sacred URL it
          reveals. In your Gitbash terminal, unleash the command:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git clone https://github.com/YOUR_USERNAME/pullquest.git
        </div>
        <div className="flex text-xl m-10">
          Replace &apos;YOUR_USERNAME&apos; with your magnificent GitHub
          username. Watch as the repository materializes before you. Enter the
          enchanted folder by typing:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          cd pullquest
        </div>
        <div className="flex text-xl m-10">
          But wait! We must tread carefully and avoid disrupting the balance of
          the main branch. To do so, let's create a new branch, a realm of your
          own within the repository. Speak the ancient words:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git branch username-profile
        </div>
        <div className="flex text-xl m-10">
          Replace &apos;username&apos; with your legendary GitHub username. Now,
          venture forth into this new realm with the command:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git checkout username-profile
        </div>
        <div className="flex text-xl m-10">
          With your profile sword in hand, let's add your unique profile details
          to the hallowed hall of fame! Seek out the src/Components/profileList
          directory within your downloaded repository. Open the sacred
          profileList.js file and behold the profiles that have come before you.
          Fear not, for you shall join their ranks! Using their wisdom as a
          guide, add your own profile in the following format:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          &#123;
          <br />
          <br /> name: 'your_name',
          <br /> githubUsername: 'gh_username',
          <br /> instagramUsername: 'ig_username',
          <br /> twitterUsername: 'twitter_username',
          <br /> linkedinURL: 'linkedin.com/your_username',
          <br />
          <br /> &#125;,
        </div>
        <div className="flex text-xl m-10">
          Feel the thrill of shaping your destiny with each keystroke. Save the
          file, for your journey is not yet complete.
        </div>
        <div className="flex text-xl m-10">
          Now, it's time to gather your changes and prepare them for the grand
          quest ahead. Invoke the sacred command:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git add .
        </div>
        <div className="flex text-xl m-10">
          Every change, every line of code, is now staged and ready for
          greatness. Commit your work with a powerful message that echoes
          through the ages:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git commit -m "Embark on an epic adventure: add my profile details"
        </div>
        <div className="flex text-xl m-10">
          The time has come to push your changes to your forked repository,
          illuminating the path for all to see. Unleash the command:
        </div>
        <div className="flex bg-gray-400 p-10 text-xl mx-10 my-5">
          git push origin username-profile
        </div>{" "}
        <div className="flex text-xl m-10">
          The forces of Git and GitHub shall carry your code to the distant
          reaches of the digital realm.
        </div>
        <div className="flex text-xl m-10">
          Now, brave warrior, open your web browser and gaze upon your forked
          copy in your GitHub dominion. A new chapter unfolds before you as you
          create a pull request, a gateway between realms. Select the 'new
          branch' you have forged and aim it towards the realm of swaaz's
          profile branch.
        </div>
        <div className="flex text-xl m-10">
          With a mighty click, submit your pull request and await the moment
          when fate intervenes. The repository owner shall review your valorous
          contribution and, upon merging it successfully, your profile shall
          take its rightful place among the honored ranks. Behold, as your name
          shines brightly in the profile tab, a beacon of your triumph! ⭐
        </div>
        <div className="flex text-xl m-10">
          Congratulations, brave developer, on conquering your first pull
          request and leaving your mark upon the codebase. May your future
          contributions be even more awe-inspiring as you continue your
          legendary journey!
        </div>
      </div>
    </div>
  );
};

export default instructions;
