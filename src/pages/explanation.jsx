import { useRef, useState } from "react";
import Background from "../components/Background";
import Footer from "../components/Footer";

function Explanation() {
  return (
    <>
      <Background />
      <div className="w-full justify-center md:p-10 p-5 mb-10 items-center">
        <div className="flex sm:text-3xl text-2xl font-bold mx-10 my-5">
          What did I just do?
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 1: Fork the Repository
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              Forking a repository means creating a personal copy of someone
              else&apos;s project on GitHub. It allows you to freely make
              changes without affecting the original repository.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              By forking the repository, you&apos;ll have your own version of
              the project under your GitHub account, which you can modify and
              contribute to.
            </span>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 2: Clone the Repository
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              Cloning a repository means creating a local copy of the repository
              on your own machine.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              Cloning is necessary because it allows you to work on the project
              locally, make changes, and test them before submitting them as a
              pull request.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <div className="text-gray-900">
              The
              <b className="text-black">{"'git clone'"}</b>
              command fetches the entire repository from GitHub and creates a
              local copy on your computer.
            </div>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 3: Create a New Branch
          </h1>

          <div className="flex py-2">
            <span className="text-gray-900">
              A branch is a parallel version of the codebase within the
              repository. It allows you to work on separate features or changes
              without affecting the main branch.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              Creating a new branch is important to keep your changes isolated
              and organized.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              The
              <b className="text-black">{"'git branch'"}</b>
              command creates a new branch, and
              <b className="text-black">{"'git checkout'"}</b>
              command allows you to switch to that newly created branch.
            </span>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 4: Make Your Changes
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              This step involves modifying the code or adding new content to the
              project according to the task or contribution you want to make.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              In this specific case, you are adding your profile details to the
              <b className="text-black font-semibold">{"'data.json'"}</b>
              file, following the given format.
            </span>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 5: Stage and Commit Your Changes
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              Before committing your changes, you need to stage them. Staging
              means selecting the specific changes you want to include in the
              next commit.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              The<b className="text-black font-semibold">{"'git add'"}</b>
              command stages the modified file,
              <b className="text-black font-semibold">
                {"'src/components/data.json'"}
              </b>
              , to be included in the commit.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              Committing means saving your changes with a descriptive message
              indicating what you&apos;ve done.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              The
              <b className="text-black font-semibold">{"'git commit'"}</b>
              command is used to create a commit with a meaningful message.
            </span>
          </div>{" "}
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 6: Push the Changes
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              Pushing your changes means uploading your local commits to your
              forked repository on GitHub.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-900">
              By using the
              <b className="text-black font-semibold">{"'git push'"}</b>
              command, you send your branch with the committed changes to your
              GitHub repository.
            </span>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold text-2xl title-font mb-4">
            Step 7: Create the Pull Request
          </h1>
          <div className="flex py-2">
            <span className="text-gray-900">
              A pull request is a way to propose your changes to the original
              repository owner for review and potential inclusion in the main
              project.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="flex text-gray-900">
              By creating a pull request, you&apos;re asking the repository
              owner to consider your changes and merge them into the main
              branch.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="flex text-gray-900">
              The pull request page allows you to review the changes you&apos;ve
              made and provide additional information or comments about your
              contribution.
            </span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="flex text-gray-900">
              Once the pull request is created, the repository owner can review
              and provide feedback or merge your changes into the main branch.
            </span>
          </div>
        </div>
        <div className="md:text-xl m-10 sm:text-lg ">
          <h1 className="text-black font-bold title-font mb-4">
            I hope this provides a clear explanation of each step and their
            significance in the pull request process!
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Explanation;
