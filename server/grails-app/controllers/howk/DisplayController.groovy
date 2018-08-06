package howk

import com.mongodb.client.FindIterable
import static com.mongodb.client.model.Filters.*
import grails.rest.*
import grails.converters.*

class DisplayController {
	static responseFormats = ['json', 'xml']
	
    def index() {
        def result = Plant.findAll()
        render result as JSON
    }
    def show( String id){
        def result = []
        //println id
        FindIterable test = Unit.find(eq("factory", id))
        test.each {
            Unit order ->
                result.push("$order.num")
                //println "$order.num"
        }

        render result as JSON
    }
}
