import 'dart:html';

void main() {
  String path = Uri.base.queryParameters['path'];
  String file = Uri.base.queryParameters['file'];
}
void loadYaml(){}
void paint(Map<String,String> head,List<Map<String,String>> data){
  document.query(title).nodes.add(new Element.html(head.title));
  Element head = new Element.html("date:${head.date}<br />Author:${head.author}<br />Version:${head.version}");
  document.query(head).nodes.add(head);
  List<Element> content = [];
  for (var i = 0; i < data.length; i++) {
    content[i]=new Element.html("""                <p class="c3">
                    <span class="c6" id="subtitle"></span>
                </p>
                <p class="c5">
                    <span class="c1" id="article"></span>
                </p>""");
    content[i].query("subtitle").nodes.add(new Element.html(data[i].head));
    content[i].query("article").nodes.add(new Element.html(data[i].article.replaceAll("/r/n","/r/n<br />")));
     document.query(content).nodes.add(content[i]);
  }
}