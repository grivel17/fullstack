package pl.crud.movie;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping("/test")
    public int getTestRest() {
        return 1;
    }

    @GetMapping("/test2")
        public List<Movies> getAll() {
        return movieService.getAll();
    }

    @PostMapping("/add")
    public String add(@RequestBody Movies movies) {
        movieService.saveMovie(movies);
        return "Good";
    }


}
