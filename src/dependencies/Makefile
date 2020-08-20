.PHONY: clean bash download

PROJECT_ROOT = $(dir $(abspath $(lastword $(MAKEFILE_LIST))))

DOCKER_IMAGE ?= lambci/lambda:build-python3.7
TARGET ?=/opt/python

MOUNTS = -v $(PROJECT_ROOT):/var/task \
	-v $(PROJECT_ROOT)build/python:$(TARGET)

DOCKER = docker run -it --rm -w=/var/task

all: download

build/python:
	mkdir -p $@

clean:
	rm -rf build

bash:
	$(DOCKER) $(MOUNTS) --entrypoint /bin/bash -t $(DOCKER_IMAGE)

download: build/python
	$(DOCKER) $(MOUNTS) -t $(DOCKER_IMAGE) pip install -r requirements.txt -t $(TARGET)
