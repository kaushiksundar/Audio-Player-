echo '========================================='
echo 'Install the node pacakges in each service'
echo '========================================='

for d in */ ; do
    echo "$d"
    cd $d
    yarn
    cd ..
done