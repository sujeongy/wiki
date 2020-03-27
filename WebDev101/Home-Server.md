#홈 서버 구축하기
> 생활코딩 강의참고해서 나스 구축하기
 
 - IPv4 vs. IPv6
 - [공유기(router)](https://opentutorials.org/course/3265/20033): IPv4의 자원을 아껴쓰기 위한 방법, 교환원
    - IP address: 인터넷 연결을 위해서 필요하다.
    - WAN vs. LAN: 통신사와 연결(Wild Aare Network)로 공유기로 연결, LAN(local area network)을 통해 공유된다.
    - 내부 192.168.0.1:Gateway, router address
    - 사설 아이피(private ip address) vs. 공용 아이피(pubilc ip address)
      : 사설 아이피는 로컬에서 사용하는 아이피 192.168.0.0 - 192.168.0.255.255(이 범위에서 벗어나면 공용아이피)
 
 - [NAT(Network address translation)](https://opentutorials.org/course/3265/20035)
    공유기에 연결된 장치들이 인터넷을 통해서 공유기 밖의 정보에 접속할 수 있도록 해준다.
 
 - [내 컴퓨터의 IP 주소 알아내기](https://opentutorials.org/course/3265/20036)
    제어판 -> 네트워크 -> 이더넷 IPv4 (default 라우터의 아이피 / 컴퓨터의 아이피)
    (linux)command -> ifconfig inet addr 컴퓨터 아이피
    (linux)command -> route -> default 이 컴퓨터의 라우터 아이피
    http://192.168.0.1/ 으로 접속해서 공유기 설정가능
    
 - [포트(port)](https://opentutorials.org/course/3265/20037)
    하나의 컴퓨터에는 여러 개의 서버가 설치될 수 있다.
    클라이언트가 컴퓨터에 접속할 때 어떤 서버와 접속하려고 하는지 구분
    ip 주소 - 컴퓨터에 접속하는 주소 / 포트 - 컴퓨터 안에 설치된 서버에 접속하는 주소
    80 - http / 0-1023 Well-known port(예약된 포트)
 
 - [포트 포워딩(port forwarding)](https://opentutorials.org/course/3265/20038)
    공유기 외부에서 공유기 내부의 컴퓨터에 접속하기 위해서는 공유기의 몇번 포트에 접속한 정보를
    공유기 내의 어떤 아이피의 몇번 포트로 연결해줄 것인지를 공유기에게 알리는 법
    라우터가 안내자 역할
 
 - [유동 아이피와 고정 아이피](https://opentutorials.org/course/3265/20056)
    ISP부터 제공 받은 IP주소가 바뀐다 -> Dynamic IP
    그래서 Static IP 구매해서 사용
 
 - [DHCP(Dynamic Host Configuration Protocol)](https://opentutorials.org/course/3265/20039)
    기존에는 Internet Protocol Version 4(TCP/IPv4) -> properties 에서 직접 설정해주었다.
    네트워크에 접속한 장치의 ip, subnet mask, gateway address, DNS 와 같은 정보를 자동으로 설정해주는 기술
    

## # references
- [생활코딩 - WEB2 Home server](https://opentutorials.org/course/3265)


## # 더보기
- web hosting, server hosting, cloud computing
