Initial setup
Fork the repo and clone locally
From your local clone add a remote upstream that points to the project's master branch
** git remote add upstream https://github.com/TeamPikachu/Cheese.git **

Workflow steps
Look at waffle and see what issue(job) needs to be done.
On your local clone checkout a new branch and name it after the issue you will be working on also add a suffix to the branch name that contains the number of the issue you will be working on. The command for branch checkout is ** git checkout -b branch_name-#issueNum **
Once on your branch run **  git pull --rebase upstream   **
Commit and work like normal. If someone has something successfully pulled into the projects master then you will run ** git pull --rebase upstream  ** and you will have to handle conflicts if there are any. Make sure and follow the format for commit messages--(feat/fix/docs/refactor/style/test/chore)whatIsBeingDone-#issueNum
Once you have finished your final commits, run ** git pull --rebase upstream **  then  you will push to your origin with a new branch name. **  git push origin branchName  **
Navigate to your fork on GitHub and submit and pull request coming from your new branch.
If the pull request is successful let everyone know that they need to rebase.
List of prefixes
      (feat) Add a new feature
      (fix) Fix bug [Fixes #0]
      (docs) Change documentation
      (style) Change formatting, add missing semicolons, etc; no code change
      (refactor) Refactor production code
      (test) Add missing tests, refactor tests; no production code change
      (chore) Update grunt tasks, etc; no production code change
      
      Commit messages should be written in the present tense; e.g. "Fix continuous integration script".
      The first line of your commit message should be a brief summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
      If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.




Issue/BranchName/Commit message format:
(prefix)what_is_being_done-#issueNum (you only need the issue num suffix for the branchNames)

Checklist:
This is just to help you organize your process
 Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
 Did I follow the correct naming convention for my branch?
 Is my branch focused on a single main change?
 Do all of my changes directly relate to this change?
 Did I rebase the upstream master branch after I finished all my work?
 Did I write a clear pull request message detailing what changes I made?
 Did I get a code review?
 Did I make any requested changes from that code review?
**DON’T FORGET! Heavily comment everything!**
If you follow all of these guidelines and make good changes, you should have no problem getting your changes merged in.








