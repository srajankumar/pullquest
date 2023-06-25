import { useRef, useState } from "react";
import Background from "../components/Background";

function App() {
  const textRefs = useRef([]);
  const [texts, setTexts] = useState([
    "https://github.com/srajankumar/pullquest",
    "git clone https://github.com/YOUR_USERNAME/pullquest.git",
    "cd pullquest",
    "git branch username-profile",
    " git checkout username-profile",
    `{
      "username": "your_github_username",
      "name": "your_name",
      "email": "email_id",
      "quote": "sample_quote"
    }`,
    "git add .",
    `git commit -m "Embark on an epic adventure: add my profile details"`,
    "git push origin username-profile",
  ]);

  const handleCopy = (index) => {
    const textToCopy = textRefs.current[index].value;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        alert("Text copied to clipboard :)");
      })
      .catch((error) => {
        alert("Failed to copy text. Please try again :(");
      });
  };

  const handleTextChange = (index, event) => {
    const updatedTexts = [...texts];
    updatedTexts[index] = event.target.value;
    setTexts(updatedTexts);
  };

  const renderTextArea = (index) => {
    return (
      <textarea
        ref={(ref) => (textRefs.current[index] = ref)}
        value={texts[index]}
        readOnly
        className="flex pl-8 h-full sm:pt-6 sm:md:text-xl sm:text-lg w-full bg-white resize-none rounded-xl text-xs no-focus-outline"
        onChange={(event) => handleTextChange(index, event)}
      />
    );
  };

  const renderButton = (index) => {
    return (
      <button
        onClick={() => handleCopy(index)}
        className="mx-10 text-white rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
          className="text-gray-500 hover:text-gray-600"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M8 10a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
            <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
          </g>
        </svg>
      </button>
    );
  };

  return (
    <>
      <Background />
      <div className="w-full justify-center md:p-10 p-5 mb-10 items-center">
        <div className="flex sm:text-3xl text-2xl font-bold mx-10 my-5">
          Hey there, fellow developer!
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Are you ready to embark on an epic journey with your first pull
          request? Let&apos;s dive right into the action and make some magic
          happen! 🔥✨
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          To begin, we need to fork the mighty repository 📂. Head over to the
          legendary realm of
        </div>
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(0)}
          {renderButton(0)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          and behold the fork icon proudly displayed in the top-right corner.
          With a single click, claim your own copy of the repository and make it
          your own.
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Now, let&apos;s bring the power of code to your local machine. Behold
          the green button labeled &quot;Code&quot;! Click it and copy the
          sacred URL it reveals. In your Gitbash terminal, unleash the command:
        </div>
        <div className="flex sm:h-auto h-14 items-center border rounded-xl m-10 bg-white">
          {renderTextArea(1)}
          {renderButton(1)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Replace &apos;YOUR_USERNAME&apos; with your magnificent GitHub
          username. Watch as the repository materializes before you. Enter the
          enchanted folder by typing:
        </div>
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(2)}
          {renderButton(2)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          But wait! We must tread carefully and avoid disrupting the balance of
          the main branch. To do so, let&apos;s create a new branch, a realm of
          your own within the repository. Speak the ancient words:
        </div>{" "}
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(3)}
          {renderButton(3)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Replace &apos;username&apos; with your legendary GitHub username. Now,
          venture forth into this new realm with the command:
        </div>
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(4)}
          {renderButton(4)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          With your profile sword in hand, let&apos;s add your unique profile
          details to the hallowed hall of fame! Seek out the src/components
          directory within your downloaded repository. Open the sacred data.json
          file and behold the profiles that have come before you. Fear not, for
          you shall join their ranks! Using their wisdom as a guide, add your
          own profile in the following format:
        </div>
        <div className="flex sm:h-56 h-44 items-center border rounded-xl m-10 bg-white">
          {renderTextArea(5)}
          {renderButton(5)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Feel the thrill of shaping your destiny with each keystroke. Save the
          file, for your journey is not yet complete.
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Now, it&apos;s time to gather your changes and prepare them for the
          grand quest ahead. Invoke the sacred command:
        </div>{" "}
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(6)}
          {renderButton(6)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Every change, every line of code, is now staged and ready for
          greatness. Commit your work with a powerful message that echoes
          through the ages:
        </div>{" "}
        <div className="flex sm:h-auto h-14 items-center border rounded-xl m-10 bg-white">
          {renderTextArea(7)}
          {renderButton(7)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          The time has come to push your changes to your forked repository,
          illuminating the path for all to see. Unleash the command:
        </div>{" "}
        <div className="flex items-center border rounded-xl m-10 bg-white">
          {renderTextArea(8)}
          {renderButton(8)}
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          The forces of Git and GitHub shall carry your code to the distant
          reaches of the digital realm.
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Now, brave warrior, open your web browser and gaze upon your forked
          copy in your GitHub dominion. A new chapter unfolds before you as you
          create a pull request, a gateway between realms. Select the &apos;new
          branch&apos; you have forged and aim it towards the realm of
          srajan&apos;s profile branch.
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          With a mighty click, submit your pull request and await the moment
          when fate intervenes. The repository owner shall review your valorous
          contribution and, upon merging it successfully, your profile shall
          take its rightful place among the honored ranks. Behold, as your name
          shines brightly in the submissions tab, a beacon of your triumph! ⭐
        </div>
        <div className="flex md:text-xl sm:text-lg m-10">
          Congratulations, brave developer, on conquering your first pull
          request and leaving your mark upon the codebase. May your future
          contributions be even more awe-inspiring as you continue your
          legendary journey!
        </div>
      </div>
    </>
  );
}

export default App;
