def string_reader(string)

  hash = {}
  double = false
  triple = false
  ret = []
  string.chars.each do |x|
    if hash[x]
     hash[x] = hash[x]+1
     else
     hash[x] = 1
     end
  end
hash.values.include?(2) ? double = 1 : nil
hash.values.sort[-1] >=3 ? triple = 1 : nil
[double,triple]
end


def counter(string_arr)
double = 0
triple = 0

string_arr.split("\n").each do |string|
temp = string_reader(string)

double +=1 if temp[0]
triple +=1 if temp[1]
end

double*triple


end

counter("lsrivfotzgdxpkefaqmuiygchj
lsrivfotzqdxpkeraqmewygchj
lsrivfotzbdepkenarjuwygchj
lsrivfotwbdxpkeoaqmunygchj
lsrijfotzbdxpkenwqmuyygchj
lsrivfotzbdxpkensqsuwygcdj
lsrivfotubdxpkenzqmuwyschj
lsrjvwotzbdxpkenaqjuwygchj
lsrtvfotzbdxpkeaaqmuqygchj
lscivzotzbdxpkenaqmuwygcnj
ddrivfotzbdxpkenlqmuwygchj
jsrivfvtzbdxpkenaqmufygchj
csrivfotzxdxpkenaqguwygchj
lprivfbtzbqxpkenaqmuwygchj
lsrnvfotzbnxpkenaqmuwygchk
lsiivfotzbdhpkencqmuwygchj
lsrivfotzbyxpkenaqmzwygchc
lsjivfotqbdxpvenaqmuwygchj
lsrivfotzbdxpkencqmuwvgqhj
lsrivfotzhdxpqenaqouwygchj
lsrivfytzbnxpkenaqmuwygcsj
llrivfotzbdxpkenaqmuwynchd
lsuivfotzbdxpnenaqmuwygchk
lsrtvootnbdxpkenaqmuwygchj
ysrivfotzcdxpkenaqmuwhgchj
lsrivfotxbdxpkefgqmuwygchj
lsrmvfotzbaxpkenaqmuwygfhj
lsrivfothbyxpkxnaqmuwygchj
isrivfotzbdxpkenaqmkwygcht
lhrivfotzbdxpkbnfqmuwygchj
lsrivfotzbmxpkenaqmuwbgdhj
lsrivvotzbdxcoenaqmuwygchj
ssrwvfotzbdjpkenaqmuwygchj
lsrivfotgbwxpkenaqmhwygchj
lsrivfotzbdxpkenaqcuhygcyj
lcdivfotzbdxpkenaqmuwxgchj
ysbivfotzbdxpkenaqmuwkgchj
lsrivfltzbdxxkenaqcuwygchj
lsrivfotzbdxpkgnaqmunegchj
fsqpvfotzbdxpkenaqmuwygchj
lsriifotzbcxpkenaqmubygchj
lsrivfotzjdxpkenaqmugygcjj
tsrikfotzbdxpkeneqmuwygchj
larivfotzbdxpkenaqmwwygcpj
larivfotzbdxpkenaqmuayrchj
lsravfotzbdxpkdoaqmuwygchj
lsrivfotzbixpkenaqvtwygchj
lsrixfotnbdxtkenaqmuwygchj
lsrirfotzbdxpkeneqmuwygchv
lsrivfofzedxpkenaqmswygchj
lwrivfotzvdxpkenaqmuwygfhj
lsrivfotzbdapkenaqmuqygehj
lsrizfotgbdxpkenaqjuwygchj
lsrivioxzbdxpkanaqmuwygchj
lsrivfmtzbdxpkgnaqmuwcgchj
lsrivfotzbdxpkeaaqmuofgchj
lsrivfotvbdxpkenuqmuwygcht
lsrivfothcdxpkenaqouwygchj
lsgivfotzbdxpkenawmuwygchi
lsrigfotzbdxpmonaqmuwygchj
lsrivfotzbdxrkfnaqmuwygcha
lsrivfopobdxpkenaqmuwygchv
lsrejfotzbdxpkvnaqmuwygchj
lsrivfotzbdxplenqqmuwygchz
lsmivfotzbdppkebaqmuwygchj
lsrivfotubdipkewaqmuwygchj
lsrivfodnbhxpkenaqmuwygchj
lsrivfotzbdxpkenaqmkwzgshj
lsrixfotzbdxpkensqmuwygohj
lsdivfotzbdxpkenaqmuwagcwj
lsrimfotzbdxpkenaqmuwygcyu
asnivfotzbdxpkenaqmbwygchj
lseivfltfbdxpkenaqmuwygchj
lsrivfbtzbdxpuenaqmuwyychj
lsziafozzbdxpkenaqmuwygchj
lsrivfotzbdxpkwnaomuwygchg
ldrivfotzbdxpkeniqmuwygihj
lsrivfotzbdxpkenaqhdwycchj
lsrigfotzbdxphenaqmuwynchj
lsripfotzbdxpgenaqmuwygchh
lsrgvfoczbdxpkenaqmuwygihj
lsribfotzbgxpkenaqhuwygchj
lsrkvfotztdxpienaqmuwygchj
lsrivfohzbdxpkenaqrxwygchj
lsrivfoszbdxpkenavmuwygvhj
lsrivfstzblxpkcnaqmuwygchj
lzrivfotzbdxpkegaqmuwygchv
lsrivtotzbdxpkenaqrumygchj
lsgivfotzbdwpkenaqmuwhgchj
lurivfotybdxpkenaqmuwygchg
lsrivfogzbdxpkmnrqmuwygchj
lsrivgotzbdxpkengqmuwygcwj
lirivfbyzbdxpkenaqmuwygchj
lwrivfotzbdxpkbjaqmuwygchj
lsrivkotzbqxakenaqmuwygchj
lxrivfotzbdxpkenaqmuwygshy
lxxivfqtzbdxpkenaqmuwygchj
lsrivfohzbdxpzenaqmuzygchj
lsrivfotzndxekenaqmuwygcvj
lsrdvfotzbdxpkenaqguiygchj
lsrivfotzbdxpiehaqauwygchj
atrivfotzbdxpkenaqmuwygchz
lsrivfovzbdxpkenaqmuvygcwj
lsrivfotzmdxpkennqmuwyxchj
luvcvfotzbdxpkenaqmuwygchj
lsriqfotzbdxpbenaqmuwygchg
bsoivfotzudxpkenaqmuwygchj
lsrivfotzbdxphenaqmhwxgchj
lsrivfotzbdxpkenasmuwjgchw
lsrivdotzboxpkenaqmuwykchj
lsqivfotzbdxcdenaqmuwygchj
lsrivfktzndypkenaqmuwygchj
lwrivfotzbdxpkenaqmuolgchj
lkrivfowzbdxpkenaqmbwygchj
lsrivhotzbdxpkenaqyuwygvhj
lsruvfotzbdxpkecaqmukygchj
lsrivdotzbdsskenaqmuwygchj
lsrivfotzbdxpkanaqmuwygcmc
lsrgvfotubdxpkenrqmuwygchj
psrivfotzbdxpkenaqmutygchd
lsrivfitzbdxpkenagmiwygchj
lsrivfotzbdxpkbnaqauwyrchj
lsrivfotvbdxpjenaqmuwygchr
lsrdvfoyzbjxpkenaqmuwygchj
vsrivfothbdxpkenaqmuwyychj
lyrivfotzpdxpkepaqmuwygchj
lsgbqfotzbdxpkenaqmuwygchj
lxrivfotzbdxpkenegmuwygchj
lsrivfokzbdxpkenaqnuwyxchj
lsrivfotubmxpkexaqmuwygchj
lswivfvtzbdxpkenaqmuwygcgj
lsrivfonzbdxpkenaqiuwygchc
isrivlotzbdxpkenaqmuwygchf
lsrilfozzbdxpkenaqmuwygcvj
wsrivfotzbdxpkepaqmuwegchj
lsrivfrtzbrxpkenaqquwygchj
lsrivfotzbdxpkeqaqmuoygjhj
lsrivfotzmdxpkenaqmuwyxchg
lsrnvfotzbzxxkenaqmuwygchj
ldrivfotzbdxpkenaqmlxygchj
lsriofotzbdxpkenaqmwwmgchj
lsrivfotzodxjkenaqmuwyglhj
lsriviotzbdxpkegaqguwygchj
lsrimfotzbdxpkanaqmuwygshj
lwrzvfotzbdxpkenaqmuwygcfj
lirivfotzbdxkkenvqmuwygchj
lsrivfotlbdxpkeoaqmuwygahj
lsxivfotzbdxpkenaqmuwwgchi
lsrivfotzbdxpkenaqmukygzzj
lsrtvfotzbdxskenaqmuwygcij
lsgilfotzbdxpdenaqmuwygchj
lsriyfotbbdxpkenaqmuwygchm
lsrivfotabdxpkenaqmuwyghhs
xsrizfotzbdxpkenaqmuwygczj
lsrivfotybdxpkenaqquwygchx
lsrzvfofzbdxpktnaqmuwygchj
xsripfotzbdxpkenaqmqwygchj
lsrivfotzbdspkenahmuwugchj
lsmivfotzbdbpkenaqmuwygchy
lsruvfotzbdxpkenaqqpwygchj
lrmivfotzbdxpkenaqguwygchj
lsnivfotzbdlpketaqmuwygchj
lsrivfotzbdxjketaqjuwygchj
lsrivxotzbdchkenaqmuwygchj
lsrivootzbdxpkenaqmuwybmhj
tsrivfdtzbdxpkenaqmuwpgchj
lsrivmotzbdxpkxnaqmuwcgchj
lsrivfotzadepkenaqmuwyichj
dsrivfotrbdxpkenaqmuwtgchj
lsrivfhtzbdxvkenoqmuwygchj
lsrivfotzvdxbkenaqmbwygchj
lsrxvcotzbdxpkenaqmuwygvhj
lsrivfotzbdxykenaqmuwfgcha
lsbivfotzbdxpkenaqmuwfvchj
lfrivfotzbdcpkgnaqmuwygchj
lsrivfotzbdxpwegdqmuwygchj
lsrivfotyjdupkenaqmuwygchj
gsrivfotzbdxpkenaemuwcgchj
lsrivfodqbdxpkenaqmuwygchg
lsrivfoczbdxpkenaqnuwwgchj
lsrivpouzbhxpkenaqmuwygchj
llbivuotzbdxpkenaqmuwygchj
lfrivfofzbdxpkenaqmuwygchb
lsrivfotzbdxpkenaumuwgghhj
lsrivfotzbdxqaenazmuwygchj
lsrivfotzbgxpkenkqmqwygchj
lsrivfotzbdxpkensqiawygchj
ljrijfotzbdxppenaqmuwygchj
lsrivfoszbdxpkrnlqmuwygchj
lsrijfotzbdxpcfnaqmuwygchj
lsrivfotzbdopkebaqmuwytchj
lsrivfonzbdxnkenalmuwygchj
larivfouzbvxpkenaqmuwygchj
lsryvfotzbdxpkensqmuwygyhj
lsrivfztzbdxpkenaxmuwigchj
lqkivfotzbdxpkenaqmuwygcht
wsdivfotzbdxpkenbqmuwygchj
lsrlvfotzadxpkencqmuwygchj
lsrivfotoohxpkenaqmuwygchj
lsrivfbuzbdfpkenaqmuwygchj
psrivfotzbdxpkenawmuqygchj
lsrivmotzbdxpkxnaqmuwcychj
lsrivfotzvdgpkenaqmuwlgchj
lcfivfstzbdxpkenaqmuwygchj
lsrivfotzbddpkeeaqmuwygcij
lsribfotzbdxpkenaqmuwugcyj
lsrivfotzbdxakenaqmkwygyhj
lsrivfotzbdxpkegaqmupyvchj
lfrivfitzbdxpkenaqmuwygcrj
lskivfotzbdxpkenaqmuwygwwj
lsrivfotzddnpkenaqmuwfgchj
lsrivfotzbdiukhnaqmuwygchj
lfrivfotzbdxpkendqmuwygctj
ljriqfotzvdxpkenaqmuwygchj
lsrivfotzbdxpkeskqpuwygchj
lsrivfotzbdxpkehaqmupygghj
lsriyfotsbdxpkedaqmuwygchj
lsrivfotzbdsjsenaqmuwygchj
lsrivfotzbwxpienaqmuaygchj
lsrivrotzbdxpkenaumuwygahj
lsrivpotzfdxpkenaqmuwyjchj
lsrivfomebdxpoenaqmuwygchj
lswigfotpbdxpkenaqmuwygchj
lsrivnotzbdxpkenaqmufrgchj
lsrivfolbbdxpkenaqmuwygcqj
lirivfotzbdxpknnaqeuwygchj
lsrrvfxtzbdxpaenaqmuwygchj
lspivfotzbdxpnsnaqmuwygchj
lsrivfotzbyxpkenaqmawygcij
lsrivfotzbfxpbenaqmuwyichj
lsrivfotzbvxpjeyaqmuwygchj
lyrihfotzbdxpknnaqmuwygchj
uurivfotzbdxpkenaqmubygchj
lsrivfotgbdxnkenaxmuwygchj
lsriffotzbdxpkdnaqmuwygshj
lsrisfotzbdxpkenaqzjwygchj
lsrilfotzbdxpkenaqmuwygtgj
lsrivfotzbdxzkenaqmuhmgchj
hsrivfotzbdxprenaqauwygchj
tsrevfotzbdupkenaqmuwygchj
lsrizfotzbpxpkenaqmuwyrchj
lsdivfotzbxxpkenaqmuhygchj
lsrivfttzbyxpkenaqmuaygchj
lsrivfotzodxpwenaqzuwygchj
lsrivfotfbdxpkenaqvuwygyhj
lsrivfotzzdxpknnaqmulygchj
lsrjvvotzbdxpkenaqmuwjgchj
lsrivuotzbdxpkeiaqxuwygchj
lsrivfotzbdxpzenaqmmwygthj
lsrivfotzbdxphenaqmuwyghvj")
