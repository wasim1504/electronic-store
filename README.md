<!-- created empty git repository -->

git init
git status
git add .
git commit -m "commit message"

<!-- created new repo on github -->

git add origin repo link
git push --set-upstream origin master

<!-- created new branch  -->

git checkout -b branch1;

<!-- made changes in the branch and committe
made diff changes on same line master and merged the branch to create conflict
resolved the conflict and pushed the final code -->

git add .
git commit -m "changes in branch1"

git checkout master

git add .
git commit -m "made changes in master"
git merge branch1

<!-- conflict is created and manually resolved -->

git push origin master
