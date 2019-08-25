## Deployrunner
##### Small tool for automatically deploying git repositories
#### Installation
On the target machine:
```
npm i --global deployrunner
```
On the development server/local machine:
```
npm i --global deployrunner
```

#### Usage
On the target machine:
```
deployrunner start config.json
```
On the development server/local machine:
```
<push to master>
```

#### Configuration
config.json (on target machine)
```json
{
  "repository": "<link to repository>"
}
```