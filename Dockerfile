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

VOLUME ["/app"]

WORKDIR /app

CMD ["/bin/bash", "startup.sh"]

