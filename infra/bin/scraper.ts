#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ScraperStack } from '../lib/scraper-stack';

const app = new cdk.App()
new ScraperStack(app, 'scraper-dev')
