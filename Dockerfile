FROM debian:jessie

MAINTAINER Yannick PEREIRA-REIS <yannick.pereira.reis@gmail.com>


# install python
RUN apt-get update && apt-get install -y \
        apt-utils \
	curl \
        wget \
        openssh-server \
        git \
        python python-dev python-pip python-virtualenv && \
	rm -rf /var/lib/apt/lists/*


RUN curl -sL https://deb.nodesource.com/setup | bash -

RUN apt-get install -y nodejs
RUN npm install -g bower
RUN npm install -g gulp
RUN npm install -g grunt

VOLUME ["/app"]

WORKDIR /app

CMD ["-"]

